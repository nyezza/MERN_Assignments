import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import{useParams,useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const UpdateOne = () => {
  const {id} = useParams()
  const nav = useNavigate()
  const [title , setTitle] = useState('')
  const [price , setPrice] = useState(0)
  const [des , setDes] = useState('')
  useEffect(()=>{
    Axios.get(`http://localhost:5000/api/products/${id}`)
    .then(res=>{
      setTitle(res.data.Title)
      setPrice(res.data.Price)
      setDes(res.data.Description)
    })
    .catch(err => console.log(err))
  },[id])

  const updateHandler=(e)=>{
    e.preventDefault()
    const newObj={
      Title:title,
      Price:price,
      Description:des
    }
    Axios.patch(`http://localhost:5000/api/products/edit/${id}`,newObj)
    .then(res =>{
      //console.log(res.data);
      nav("/products")
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      <Form onSubmit={updateHandler}>
      <Form.Group className="mb-3">
        <Form.Label>Title:</Form.Label>
        <Form.Control type="title" value={title} onChange={e=>setTitle(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Price:</Form.Label>
        <Form.Control type="price" value={price} onChange={e=>setPrice(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description:</Form.Label>
        <Form.Control type="descrip" value={des} onChange={e=>setDes(e.target.value)}/>
      </Form.Group>
      
      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default UpdateOne