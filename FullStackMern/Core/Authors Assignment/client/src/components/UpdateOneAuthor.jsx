import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams,Link } from 'react-router-dom';

const UpdateOneAuthor = () => {
  const {id} = useParams()
  const nav = useNavigate()
  const [errors , setErrors] = useState([])
  const [name , setName] = useState({})

  useEffect(()=>{
    Axios.get(`http://localhost:5000/api/authors/${id}`)
    .then(res =>{
      setName(res.data.Name)
    })
    .catch(err => console.log(err))
  },[id])

  const updateHandler =(e)=>{
    e.preventDefault()
    const obj ={
      Name:name
    }
    Axios.patch(`http://localhost:5000/api/authors/${id}`,obj)
    .then(res =>{
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

  // to loop back and cancel the update
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
      <p className='StyleLink'>Edit this author:</p>
      </div>

      
      <Form onSubmit={updateHandler} className='FormStyle'>

        {errors.map((err, index) => (
                    <p key="{index}" style={{ color: "red" }}>{err}</p>
                ))}

      <Form.Group className="mb-3" controlId='exampleForm.ControlInput1'>
        <Form.Label>Name:</Form.Label>
        <Form.Control  value={name} placeholder="Enter the Name here" onChange={(e)=>setName(e.target.value)} />
      </Form.Group>
      
      <Button variant="primary" onClick={()=>CancelBtn()} className='SpaceBtn'>Cancel</Button>{'  '}
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
    
    </div>
  )
}

export default UpdateOneAuthor