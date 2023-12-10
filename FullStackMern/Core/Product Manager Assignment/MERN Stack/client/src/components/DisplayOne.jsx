import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import Axios from 'axios'
import Button from 'react-bootstrap/Button';
const DisplayOne = () => {
  
  const [oneProduct , setOneProduct] = useState(null)
  const {id} =useParams()
  useEffect(()=>{
    Axios.get(`http://127.0.0.1:5000/api/Product/${id}`)
    .then(res=>{
      console.log(res.data);
      setOneProduct(res.data)
    })
    .catch(err=>console.log(err))
  },[id])

  return (
    <div>
      <h1>Product Manager</h1>
      <div>
      {
        oneProduct?
        <ul>
          <li>Title: {oneProduct.Title}</li>
          <li>Price: {oneProduct.Price} $</li>
          <li>Description : {oneProduct.Title}</li>
        </ul>:
        <p>Loading, Please Wait</p>
      }
      </div>
      <div>
                <Link to={`/product/edit/${id}`}><Button variant="primary">Edit</Button>{' '}</Link>
       
      </div>
    </div>
  )
}

export default DisplayOne