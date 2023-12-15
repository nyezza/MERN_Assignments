import React, { useState } from 'react'
import Axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate,Link } from 'react-router-dom';
import '../App.css';

const CreateAuthor = () => {

  const nav = useNavigate()
  const [errors , setErrors] = useState([])
  const [name , setName] = useState('')

  const submitHandler = (e) =>{
    e.preventDefault()
    const obj={
      Name:name
    }
    Axios.post(`http://localhost:5000/api/authors`,obj)
    .then(res=>{
      console.log(res.data);
      nav('/authors')
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

  const CancelBtn=()=>{
    nav(-1)
  }

  return (
    <div className='container'>

      <div>
      <div className='navBar'>
      <Link to='/authors'className='styleHomeLink'>Home</Link>
      <Link to='/' className='styleHomeLink'>LogOut</Link>
      </div>
      <p className='StyleLink'>Add a new author:</p>
      </div>

      <Form onSubmit={submitHandler} style={{border:"black solid 02px"}}>
        {errors.map((err, index) => (
                    <p key="{index}" style={{ color: "red" }}>{err}</p>
                ))}
                
      <Form.Group className="mb-3" controlId='exampleForm.ControlInput1'>
        <Form.Label>Name:</Form.Label>
        <Form.Control  name='Name' placeholder="Enter the Name here" onChange={(e)=>setName(e.target.value)} />
      </Form.Group>

      <Button variant="primary" onClick={()=>CancelBtn()}>Cancel</Button>{'  '}
      <Button variant="primary" type="submit">Submit</Button>
    </Form>

    </div>
  )
}

export default CreateAuthor