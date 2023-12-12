import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'
const CreateFilmMaker = () => {
  const[name , setName] = useState('')
  const[age , setAge] = useState(0)
  const[nationality , setNationality] = useState('')
  const nav = useNavigate()
  const submitHandler =(e)=>{
    e.preventDefault()
    const newObj={
      Name:name,
      Age:age,
      Nationality:nationality
    }
    Axios.post(`http://localhost:5000/api/filmMaker`,newObj)
    .then(res =>{
      console.log(res.data);
      nav(-1)
    })
    .catch(err=>console.log(err))
  }
  return (
    <div>
      <h1>Create Film Maker</h1>
      <Form onSubmit={submitHandler}>

          <Form.Group className="mb-3">
            <Form.Label>Name:</Form.Label>
            <Form.Control type={name} placeholder="Enter Name" onChange={e=>setName(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Age:</Form.Label>
            <Form.Control type={age} placeholder="Enter Age" onChange={e=>setAge(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Nationality:</Form.Label>
            <Form.Control type={nationality} placeholder="Enter Nationality" onChange={e=>setNationality(e.target.value)}/>
          </Form.Group>

         
          
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
    </div>
  )
}

export default CreateFilmMaker