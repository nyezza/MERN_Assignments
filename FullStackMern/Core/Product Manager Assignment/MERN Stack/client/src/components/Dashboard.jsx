import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
const Dashboard = () => {
  const [allProduct , setAllProduct] = useState([])

    const refrech=()=>{
      Axios.get("http://127.0.0.1:5000/api/Product")
      .then(res=>{
          console.log(res.data);
          setAllProduct(res.data)
          console.log(allProduct);
      })
      .catch(err=>console.log(err))
    }
    
    useEffect(()=>{
      refrech()
    },[])

      const deletOneProduct=(deletedId)=>{
        
          Axios.delete(`http://127.0.0.1:5000/api/Product/${deletedId}`)
          .then(res=>{
            refrech()
            console.log(res.data);
            const filtredProduct = allProduct.filter((oneProd)=>{
              return(
                oneProd.id !==deletedId
              )
            })
            setAllProduct(filtredProduct)
          })
          .catch(err=>console.log(err))
        }
      
  return (
    <div>
      
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>title</th>
          <th>Price</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          allProduct.map((item,index)=>{
            return(<tr key={index}>
              <td>{item._id}</td>
              <td>{item.Title}</td>
              <td>{item.Price} $</td>
              <td>{item.Description}</td>
              <td>
                <Link to={`/product/${item._id}`}><Button variant="warning">Show</Button>{' '}</Link>
                <Link to={`/product/edit/${item._id}`}><Button variant="primary">Edit</Button>{' '}</Link>
                <Button variant="danger" onClick={()=>{deletOneProduct(item._id)}}>Delete</Button>{' '}
              </td>      
            </tr>)
          })
        }
      </tbody>
    </Table>
    <Link to="/new"><Button variant="success" style={{margin:"20px"}}>Create</Button>{' '}</Link>
    </div>

  )
  }

export default Dashboard