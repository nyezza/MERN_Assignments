import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import {useParams,useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EditProduct = () => {
  const nav = useNavigate();
  const {id} = useParams();
  const [title , setTitle] = useState("")
  const [price , setPrice] = useState(0)
  const [description , setDescription] = useState("")

  useEffect(()=>{
    Axios.get(`http://127.0.0.1:5000/api/Product/${id}`)
    .then(res=>{
      setTitle(res.data.Title)
      setPrice(res.data.Price)
      setDescription(res.data.Description)
    })
    .catch(err=>console.log(err))
  },[id])

  const updateHandler=(e)=>{
    e.preventDefault()
    const newVerObj={
      Title:title,
      Price:price,
      Description:description
    }
    Axios.patch(`http://127.0.0.1:5000/api/Product/edit/${id}`,newVerObj)
      .then(res=>{
        console.log(res.data);
        nav('/')
      })
      .catch(err=>console.log(err))
  }

  return (
    <div>
      <Form onSubmit={updateHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Title:</Form.Label>
          <Form.Control type="title" value={title} onChange={e=>setTitle(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>Price:</Form.Label>
          <Form.Control type="price" value={price} onChange={e=>setPrice(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>Description:</Form.Label>
          <Form.Control type="description" value={description} onChange={e=>setDescription(e.target.value)}/>
        </Form.Group>
        
        <Button variant="success" type="submit">Submit</Button>
      </Form>
    </div>
  )
}

export default EditProduct