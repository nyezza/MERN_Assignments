import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Axios from 'axios'
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
  )
}

export default DisplayOne