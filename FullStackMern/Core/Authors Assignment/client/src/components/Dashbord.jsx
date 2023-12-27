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

  // to refrech to view afcter delete
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
    <div className='FormStyle'>

      <div>
        <div className='navBar'>
           <Link to='/authors/new' className='styleHomeLink'>Add an author</Link>
           <Link to='/' className='styleHomeLink'>LogOut</Link>
        </div>
     
      <p className='StyleLink'>We have quotes by:</p>
      </div>

            <Table striped bordered hover >

            <thead >
              <tr className='StyleBtn'>
                <th className='StyleBtn'>Author</th>
                <th>Actions Available</th>
              </tr>
            </thead>

            <tbody>
            {
              authList.map((item,index)=>{
              return(<tr key={index}>
                <td>{item.Name}</td>
                <td>
                  <Link to={`/authors/${item._id}/edit`}><Button variant='info' className='SpaceBtn'>Edit</Button>{' '}</Link>
                  <Button variant='info'onClick={()=>deletechoosenAuthor(item._id)} className='SpaceBtn'>Delete</Button>{' '}
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