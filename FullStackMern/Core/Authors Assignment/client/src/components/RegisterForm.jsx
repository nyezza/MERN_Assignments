import React from 'react'
import Axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams,Link } from 'react-router-dom';

const RegisterForm = () => {
    const nav = useNavigate()
    

    const CancelFn = (e) =>{
        nav(-1)
    }

  return (
    <div className='container'>
        <Form className='FormStyle'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='StyleLink'>FirstName</Form.Label>
                <Form.Control type="firstName" placeholder="Enter First Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='StyleLink'>LastName</Form.Label>
                <Form.Control type="lastName" placeholder="Enter Last Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='StyleLink'>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='StyleLink'>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='StyleLink'>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>

            <Button variant="primary" className='SpaceBtn' onClick={()=>CancelFn()}>Cancel</Button>
            <Button variant="success" className='SpaceBtn'>Register</Button>
    </Form>
    </div>
  )
}

export default RegisterForm