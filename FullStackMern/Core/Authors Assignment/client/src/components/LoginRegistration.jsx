import React, { useState } from 'react'
import Axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
const LoginRegistration = () => {
    const nav = useNavigate()
    const[email , setEmail] = useState('')
    const [password, setPassword] = useState('')

    const LoginHandler = (e) =>{
        e.preventDefault()
        //Axios.axios.post('http://localhost:8000/api/login', payload, {withCredentials: true})
    }

    const RegisterFn = (e) =>{
        nav("/register")
    }
  return (

    <div className='container'>
        <Form className='FormStyle'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='StyleLink'>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='StyleLink'>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="success" className='SpaceBtn' onClick={()=>RegisterFn()}>Register</Button>
            <Button variant="primary" className='SpaceBtn'>LogIn</Button>
    </Form>
    </div>
  )
}

export default LoginRegistration