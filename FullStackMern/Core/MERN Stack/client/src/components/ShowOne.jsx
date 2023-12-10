import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Axios from 'axios'
const ShowOne = () => {
  const{id} = useParams()
  const [oneProduct , setOneProduct] = useState(null)
  useEffect(()=>{
    Axios.get(`http://localhost:5000/api/products/${id}`)
    .then(res => {
      //console.log(res.data);
      setOneProduct(res.data)
    }
      )
    .catch(err => console.log(err))
  },[id])
  return (
    <div>
      {oneProduct?
    
    <div>
      <h1>{oneProduct.Title}</h1>
      <p>Price: {oneProduct.Price} $</p>
      <p>Description: {oneProduct.Description}</p>
    </div>:
      <p>Please Wait</p>
  }
  <Link to={`/products/edit/${id}`}><Button variant="info" >Edit</Button>{' '}</Link>
  </div>)
}

export default ShowOne