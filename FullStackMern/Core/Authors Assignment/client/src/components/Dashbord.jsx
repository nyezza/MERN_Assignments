import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';
const Dashbord = () => {
  const [authList , setAuthList] = useState([])
  const refrech=()=>{
    Axios.get(`http://localhost:5000/api/authors`)
    .then(res => 
      {
        setAuthList(res.data.sort((a,b)=>{
          if(a.Name<b.Name){
            return -1;
          }
          if(a.Name>b.Name){
            return 1;
          }
          return 0;
        })
    )
  }
      )
    .catch(err => console.log(err))
  }
  useEffect(()=>{
    refrech()
  },[])
  const deletechoosenAuthor=(IdAuthToDelete)=>{
    Axios.delete(`http://localhost:5000/api/authors/${IdAuthToDelete}`)
    .then(res =>{
      const filteredLis = authList.filter((item,index)=>{
        return(
          item._id !== IdAuthToDelete
        )
      })
      setAuthList(filteredLis)
      refrech()
    })
    .catch(err=>console.log(err))
  }
  return (
    <div style={{justifyContent:"left", margin:"40px",color:"rgb(165,102,245)"}}>
      <div>
      <Link to='/authors/new'style={{justifyContent:"left",display:"flex"}}>Add an author</Link>
      <p style={{justifyContent:"left",display:"flex",color:"rgb(165,102,245)"}}>We have quotes by:</p>
      </div>
            <Table striped bordered hover >
            <thead >
              <tr style={{textDecorationColor:"white"}}>
                <th style={{textDecorationColor:"white"}}>Author</th>
                <th>Actions Available</th>
              </tr>
            </thead>
            <tbody>
            {
              authList.map((item,index)=>{
              return(<tr key={index}>
                <td>{item.Name}</td>
                <td>
                  <Link to={`/authors/${item._id}/edit`}><Button variant='info' style={{margin:"05px"}}>Edit</Button>{' '}</Link>
                  <Button variant='info'onClick={()=>deletechoosenAuthor(item._id)} style={{margin:"05px"}}>Delete</Button>{' '}
                </td>
              </tr>)
              })
              
              }
            </tbody>
          </Table>
          
    </div>
    
  )
}

export default Dashbord