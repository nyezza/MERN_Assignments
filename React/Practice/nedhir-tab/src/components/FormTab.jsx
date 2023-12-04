import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormTab = (props) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const SubmitHandler =(e)=>{
    e.preventDefault();
    const newDict={
      title,
      content
    }
    console.log(newDict);
    props.add(newDict);
    setContent('');
    setTitle('');
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
      <button>Submit</button>
    </Form>
  )
}

export default FormTab