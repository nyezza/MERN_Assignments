import React, { useEffect, useState } from 'react'
import { useParams,useNavigate} from 'react-router-dom'
import Axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const UpdateNote = () => {
  const {id} = useParams()
  const nav = useNavigate()
  const [errors , setErrors] = useState([])
  const [inputOneObj , setInputOneObj] = useState({
    Title:"",
    Content:"",
    isImportant:false
  })
  useEffect(()=>{
    Axios.get(`http://localhost:5000/api/note/${id}`)
    .then(res => {
      setInputOneObj(res.data)
    })
  },[id])
  const handelInput = (e)=>{
    setInputOneObj({
      ...inputOneObj,[e.target.name]:e.target.name === "isImportant" ? e.target.checked : e.target.value
    })
  }

  const updateHandler = (e)=>{
    e.preventDefault()
    Axios.patch(`http://localhost:5000/api/note/${id}`,inputOneObj)
    .then(res =>{
      console.log(res.data)
      nav("/notes")
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
    <div>
      <Form onSubmit={updateHandler}>
      {errors.map((err, index) => (
                    <p key="{index}" style={{ color: "red" }}>{err}</p>
                ))}
      <Form.Group className="mb-3">
        <Form.Label>Title:</Form.Label>
        <Form.Control value={inputOneObj.Title} name='Title' placeholder="Enter the Title here" onChange={handelInput} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Content :</Form.Label>
        <Form.Control name='Content' value={inputOneObj.Content}  placeholder="Enter the content of your note here" onChange={handelInput}/>
      </Form.Group>
      <Form.Group  className="mb-3" controlId="formBasicCheckbox">
        <Form.Check name='isImportant' type="checkbox" label="isImportant" value={inputOneObj.isImportant} onChange={handelInput}/>
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
    </div>
  )
}

export default UpdateNote