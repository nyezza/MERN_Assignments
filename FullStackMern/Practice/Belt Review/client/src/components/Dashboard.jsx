import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import dateFormat from 'dateformat'
import Button from 'react-bootstrap/esm/Button';
const Dashboard = () => {
  const [noteList , setNoteList] = useState([])
  const refech=()=>{
    Axios.get(`http://localhost:5000/api/note`)
    .then(res=>{
      setNoteList(res.data)
    })
    .catch(err => console.log(err))
  }
  useEffect(()=>{
    refech()
  },[])
  const deletechoosenNote=(deletedId)=>{
    Axios.delete(`http://localhost:5000/api/note/${deletedId}`)
    .then(res =>{
      refech()
      const filteredList = noteList.filter((item,index)=>{
        return(
          item._id !==deletedId
        )
      })
      setNoteList(filteredList)
    })
    .catch(err => console.log(err))
  }
  return (
    <div >
      {
        noteList.map((item,index)=>{
         return(
          <div style={{width:"28rem", 
          backgroundColor:"rgb(255,229,153)", 
          border:"2px silver solid",
          margin:"15px auto",
          borderRadius:"08px"
          }}><Link to={`/notes/${item._id}`} style={{textDecorationLine:'none',color:'black'}}>
            
            <div style={{display:"flex",justifyContent:"left",marginLeft:"20px"}}> 
            <p style={{paddingRight:"20px"}}>{(item.isImportant===true) ?
              <p>📌</p>:
            
              <p></p>
            }
            </p>
            <p>{item.isImportant}</p>
            <h3>{item.Title}</h3>
            </div>
            
            <p style={{display:"flex",justifyContent:"left",justifyItems:"left",marginLeft:"20px"}}>{item.Content}</p>
            
            </Link>
            <div style={{display:"flex",justifyContent:"space-between",marginLeft:"20px"}}>
              <p>{dateFormat(item.createdAt,'yyyy-mm-dd')}</p>
              <div style={{display:'flex',justifyContent:"flex-end"}}>
              <Link to={`/notes/${item._id}/edit`}><Button variant='light' style={{margin:"05px"}}>Edit</Button>{'   '}</Link>
              <Button variant='light'onClick={()=>deletechoosenNote(item._id)} style={{margin:"05px"}}>Delete</Button>{' '}
              </div>
            </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Dashboard