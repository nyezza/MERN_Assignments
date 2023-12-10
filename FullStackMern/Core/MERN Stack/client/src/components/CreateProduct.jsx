import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const CreateProduct = () => {
  const [title , setTite] = useState('')
  const [price , setPrice] = useState(0)
  const [descrip , setDescrip] = useState('')
  const nav = useNavigate()

  const submitHandler=(e)=>{
    e.preventDefault()
    const newObj={
      Title: title,
      Price: price,
      Description: descrip
    }
    Axios.post(`http://localhost:5000/api/products`,newObj)
    .then(res=>{
      console.log(res.data);
      nav("/products")
    })
    .catch(err => console.log(err))
  }
  return (
    <div>
      <h1>CreateProduct</h1>
      <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3">
        <Form.Label>Title:</Form.Label>
        <Form.Control type="title" placeholder="Enter title" onChange={e=>setTite(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Price:</Form.Label>
        <Form.Control type="price" placeholder="Price" onChange={e=>setPrice(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description:</Form.Label>
        <Form.Control type="descrip" placeholder="Description" onChange={e=>setDescrip(e.target.value)}/>
      </Form.Group>
      
      <Button variant="success" type="submit">Submit</Button>
    </Form>
    </div>
  )
}

export default CreateProduct