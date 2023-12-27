import React, { useState } from 'react'
import Axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
const CreateNote = () => {
  const nav = useNavigate()
  const [errors , setErrors] = useState([])
  const [inputObj , setInputObj] = useState({
    Title:"",
    Content:"",
    isImportant:false
  })
  const handelInput = (e)=>{
    setInputObj({
      ...inputObj,[e.target.name]:e.target.name === "isImportant" ? e.target.checked : e.target.value
    })
  }
  const submitHandler = (e) =>{
    e.preventDefault()
    Axios.post(`http://localhost:5000/api/note`,inputObj)
    .then(res=>{
      console.log(res.data);
      nav('/notes')
    })
    .catch(err =>{
      const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
    })
    
  }
  return (
    
      <Form onSubmit={submitHandler}>
        {errors.map((err, index) => (
                    <p key="{index}" style={{ color: "red" }}>{err}</p>
                ))}
      <Form.Group className="mb-3">
        <Form.Label>Title:</Form.Label>
        <Form.Control value={inputObj.Title} name='Title' placeholder="Enter the Title here" onChange={handelInput} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Content :</Form.Label>
        <Form.Control name='Content' value={inputObj.Content}  placeholder="Enter the content of your note here" onChange={handelInput}/>
      </Form.Group>
      <Form.Group  className="mb-3" controlId="formBasicCheckbox">
        <Form.Check name='isImportant' type="checkbox" label="isImportant" value={inputObj.isImportant} onChange={handelInput}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
   
  )
}

export default CreateNote