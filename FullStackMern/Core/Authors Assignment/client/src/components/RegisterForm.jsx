import React, { useState } from 'react'
import Axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {

    const nav = useNavigate()

    const [errors , setErrors] = useState([])
    const [firstName , setFirstName] =useState('')
    const [lastName , setLastName] =useState('')
    const [email , setEmail] =useState('')
    const [password , setPassword] =useState('')
    const [confirmPassword , setConfirmPassword] =useState('')

    const submitHandler = (e) =>{
        e.preventDefault()
        const newUser={
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        }
        Axios.post(`http://localhost:5000/api/register`,newUser,{withCredentials:true})
        .then(res=>{
            console.log(res.data)
            nav('/')
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

    const CancelFn = (e) =>{
        nav(-1)
    }

  return (
    <div className='container'>
        <Form className='FormStyle' onSubmit={submitHandler}>

        {errors.map((err, index) => (
                    <p key="{index}" style={{ color: "red" }}>{err}</p>
                ))}

        <Form.Group className="mb-3">
                <Form.Label className='StyleLink'>FirstName</Form.Label>
                <Form.Control type="firstName" placeholder="Enter First Name" onChange={e=>setFirstName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label className='StyleLink'>LastName</Form.Label>
                <Form.Control type="lastName" placeholder="Enter Last Name" onChange={e=>setLastName(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label className='StyleLink'>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"onChange={e=>setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label className='StyleLink'>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label className='StyleLink'>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" onChange={e=>setConfirmPassword(e.target.value)} />
            </Form.Group>

            <Button variant="primary" className='SpaceBtn' onClick={()=>CancelFn()}>Cancel</Button>
            <Button variant="success" className='SpaceBtn'type='submit'>Register</Button>
    </Form>
    </div>
  )
}

export default RegisterForm