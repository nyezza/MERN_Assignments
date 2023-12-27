import React, { useState } from 'react'
import Axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const LoginRegistration = () => {

    const nav = useNavigate()
    // const [userlogin , setUserLogin] = useState({
    //     email:"",
    //     password:""
    // })
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [errors , setErrors] = useState([])
   
    const LoginHandler = (e) =>{
        e.preventDefault()
        const userlogin={
            email,
            password
        }
        Axios.post('http://localhost:5000/api/login', userlogin, {withCredentials: true})
        .then(res =>{
            console.log(res.data);
            setEmail("")
            setPassword("")
            console.log("successfull login");
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

    const RegisterFn = (e) =>{
        nav("/register")
    }
  return (

    <div className='container'>
        <Form className='FormStyle' onSubmit={LoginHandler}>
            
        {errors.map((err, index) => (
                    <p key="{index}" style={{ color: "red" }}>{err}</p>
                ))}
                
            <Form.Group className="mb-3">
                <Form.Label className='StyleLink'>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={e=>setEmail(e.target.value)} />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='StyleLink'>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
            </Form.Group>
            <Button variant="success" className='SpaceBtn' onClick={()=>RegisterFn()}>Register</Button>
            <Button variant="primary" className='SpaceBtn'type='submit'>LogIn</Button>
    </Form>
    </div>
  )
}

export default LoginRegistration