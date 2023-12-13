import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
import dateFormat from 'dateformat'
import Button from 'react-bootstrap/esm/Button';
const ShowOneNote = () => {
  const {id} = useParams()
  const nav = useNavigate()
    const[oneNote , setOneNote] = useState([])
    useEffect(()=>{
      Axios.get(`http://localhost:5000/api/note/${id}`)
      .then(res =>{
        setOneNote(res.data)
      })
      .catch(err => console.log(err))
    },[id])
    const backLoopFn =()=>{
      nav(-1)
    }
  return (
    <div>
      <div style={{width:"28rem", 
          backgroundColor:"rgb(255,229,153)", 
          border:"2px silver solid",
          margin:"15px auto",
          borderRadius:"08px"
          }}>
            
            <div style={{display:"flex",justifyContent:"left",marginLeft:"20px"}}> 
            <p style={{paddingRight:"20px"}}>{(oneNote.isImportant===true) ?
              <p>📌</p>:
            
              <p></p>
            }
            </p>
            <p>{oneNote.isImportant}</p>
            <h3>{oneNote.Title}</h3>
            </div>
            
            <p style={{display:"flex",justifyContent:"left",justifyItems:"left",marginLeft:"20px"}}>{oneNote.Content}</p>
            
           
            <div style={{display:"flex",justifyContent:"space-between",marginLeft:"20px"}}>
              <p>{dateFormat(oneNote.createdAt,'yyyy-mm-dd')}</p>
            </div>
            <Button variant='light'onClick={()=>backLoopFn()} style={{margin:"05px"}}>Back</Button>{' '}
            </div>

    </div>
  )
}

export default ShowOneNote