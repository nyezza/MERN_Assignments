import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios'
import dateFormat from 'dateformat'
const Dashbord = () => {
const[movieList , setMovieList] = useState([])

const nav = useNavigate()

const refrech=()=>{
  Axios.get(`http://localhost:5000/api/movies`)
  .then(res=>{
    
    console.log(res.data);
    return(setMovieList(res.data))
    //console.log(movieList);
  })
  .catch(err=>console.log(err))
}
useEffect(()=>{
  refrech()
  
},[])



const DeleteMovie=(deletedId)=>{
  Axios.delete(`http://localhost:5000/api/movies/${deletedId}`)
  .then(res=>{
    refrech()
    const filtredMovieList = movieList.filter((item,index)=>{
      return(item._id !== deletedId)
    })
    setMovieList(filtredMovieList)
  })
  .catch(err=>console.log(err))
}

  return (
    <div>
      <h1>MOVIES</h1>
          <Table striped bordered hover style={{margin:"20px"}}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Release Date</th>
              <th>Type</th>
              <th>Film Makers</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {
              movieList.map((oneMovie,index)=>{
                return(
                  <tr key={index}>
                    <td>{oneMovie.Title}</td>
                    <td>{dateFormat(oneMovie.ReleasedDate,"mm/dd/yyyy")}</td>
                    <td>{oneMovie.Type}</td>
                    <td>{oneMovie.FilmMaker}</td>
                    <td>
                    <Button variant="success" >Edit</Button>{' '}
                    <Button variant="danger" onClick={()=>DeleteMovie(oneMovie._id)}>Delete</Button>{' '}
                    </td>
                  </tr>
                )
              })
              
            }
            
          </tbody>
        </Table>
        <Link to='/newMovie'><Button variant="secondary" style={{margin:"50px"}}>Add Movie</Button>{' '}</Link>
        
    </div>
  )
}

export default Dashbord