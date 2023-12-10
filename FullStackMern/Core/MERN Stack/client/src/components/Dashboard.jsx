import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Axios from 'axios'
const Dashboard = () => {
  const [productList , setProductList] = useState([])
  const refrech=()=>{
    Axios.get(`http://localhost:5000/api/products`)
    .then(res=>{
      setProductList(res.data)
    })
    .catch(err=>console.log(err))
  }
  useEffect(()=>{
    refrech()
  },[])

  const deleteProduct=(idToDelete)=>{
    Axios.delete(`http://localhost:5000/api/products/${idToDelete}`)
    .then(res =>{
      refrech()
      console.log(res.data);
      const filtredList = productList.filter((item)=>{
        return(
          item._id !== idToDelete
        )
      })
      setProductList(filtredList)
    })
    .catch(err=>console.log(err))
  }

  return (
    <div>
      
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          productList.map((item,index) =>{
            return(<tr key={index}>
              <td>{item.Title}</td>
              <td>{item.Price} $</td>
              <td>{item.Description}</td>
              <td>
              <Link to={`/products/${item._id}`}><Button variant="primary" >Show</Button>{' '}</Link>
              <Link to={`/products/edit/${item._id}`}><Button variant="info" >Edit</Button>{' '}</Link>
              <Button variant="danger" onClick={()=>deleteProduct(item._id)}>Delete</Button>{' '}
              </td>
            </tr>)
          }) 
        }
      </tbody>
    </Table>
    <Link to={`/products/new`}><Button variant="success" >Create New</Button>{' '}</Link>
    </div>
  )
}

export default Dashboard