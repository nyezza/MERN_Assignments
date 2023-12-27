import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
const CreateProduct = () => {
  const [title , setTitle] = useState('')
  const [price , setPrice] = useState(0)
  const [description , setDescription] = useState('')
  const nav = useNavigate()
  const submitHnadler=(e)=>{
    e.preventDefault();
    const obj={
      Title:title,
      Price:price,
      Description:description
    }
    nav('/');
    Axios.post("http://127.0.0.1:5000/api/Product",obj)
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
  }
  return (
    <div>
        <Form onSubmit={submitHnadler}>
        <Form.Group className="mb-3">
          <Form.Label>Title:</Form.Label>
          <Form.Control type="title" placeholder="Enter title" onChange={e=>setTitle(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>Price:</Form.Label>
          <Form.Control type="price" placeholder="Price" onChange={e=>setPrice(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>Description:</Form.Label>
          <Form.Control type="description" placeholder="description" onChange={e=>setDescription(e.target.value)}/>
        </Form.Group>
        
        <Button variant="success" type="submit">Submit</Button>
      </Form>
    </div>
  )
}

export default CreateProduct