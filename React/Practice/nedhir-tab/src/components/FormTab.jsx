import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const FormTab = (props) => {
  const [tite, setTitle] = useState('')
  const [content, setContent] = useState('')
  const nav =useNavigate()

  const SubmitHandler =(e)=>{
    e.preventDefault();
    const newDict={
      tite,
      content
    }
    console.log(newDict);
    props.add(newDict);
    setContent('');
    setTitle('');
    nav('/')
  }

  return (
    <Form onSubmit={SubmitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="Text" placeholder="Enter Title" onChange={(e)=>setTitle(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Content</Form.Label>
        <Form.Control type="Text" placeholder="Content" onChange={(e)=>setContent(e.target.value)} />
      </Form.Group>
      {/* <Button variant="primary">
        Submit
      </Button> */}
      <Button variant='success'>Submit</Button>
    </Form>
  )
}

export default FormTab