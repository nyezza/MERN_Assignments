import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios'

const CreateMovie = () => {
  const[title , setTitle] = useState('')
  const[releasedDate , setReleasedDate] = useState(Date)
  const[type , setType] = useState([])
  const[maker , setMaker]=useState('')
  const[idMaker , setIdMaker] = useState('')
  const[filmMaker , setFilmMaker] = useState([])
  const nav = useNavigate()
  useEffect(()=>{
    Axios.get(`http://localhost:5000/api/filmMaker`)
    .then(res=>{
      console.log(res.data)
      return(
      setFilmMaker(res.data))

    })
  },[])
  const submitHandler=(e)=>{
    e.preventDefault()
    //console.log(maker);
    const newObj ={
      Title:title,
      ReleasedDate:releasedDate,
      Type: type,
      FilmMaker:maker,
      //IdMaker:idMaker
    }
    Axios.post(`http://localhost:5000/api/movies`,newObj)
    .then(res=>{
      console.log(res.data);
      nav("/")
    })
    .catch(err=>console.log(err))

  }
  return (
    <div>
      <h1>CreateMovie</h1>
          <Form onSubmit={submitHandler}>

          <Form.Group className="mb-3">
            <Form.Label>Title:</Form.Label>
            <Form.Control type={title} placeholder="Enter Title" onChange={e=>setTitle(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Released Date</Form.Label>
            <Form.Control type={releasedDate} placeholder="Enter Released Date mm/dd/yyyy" onChange={e=>setReleasedDate(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Type:</Form.Label>
            <Form.Control type={type} placeholder="choose Type" onChange={e=>setType(e.target.value)}/>
          </Form.Group>

          
            <label>Film Maker:</label>
            <select name='filmMaker' onChange={e=>setMaker(e.target.value)}>
              <option>--</option>
              {
                filmMaker.map((item,index)=>{
                 return(
                 
                  <option value={item.Name} key={index}>{item.Name}</option>
                  
                 
                 ) 
                 //<input type='hidden' value={item._id} onChange={e=>setIdMaker(e.target.value)}/>
                })
                
              }
            </select>
            
           {/* <Form.Control type={filmMaker} placeholder="Choose filmMaker" onChange={e=>setFilmMaker(e.target.value)}/>
             <Form.Control type={filmMaker} placeholder="Choose filmMaker" onChange={e=>setFilmMaker(e.target.value)}/> */}
            <Link to='/newFilmMaker'><Button variant="secondary" style={{margin:"50px"}}>Add Film Maker</Button>{' '}</Link>
          
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
    </div>
  )
}

export default CreateMovie