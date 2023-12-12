import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Card from 'react-bootstrap/Card';
import dateFormat from 'dateformat'
import Button from 'react-bootstrap/esm/Button';
const Dashboard = () => {
  const [noteList , setNoteList] = useState([])
  useEffect(()=>{
    Axios.get(`http://localhost:5000/api/note`)
    .then(res=>{
      setNoteList(res.data)
    })
    .catch(err => console.log(err))
  },[])
  return (
    <div >
      {
        noteList.map((item,index)=>{
        //   return(<Card
        //   bg="warning"
        //   style={{ width: '18rem' }}
        //   className="mb-2"
        // >
        //   <Card.Header>{item.Title}</Card.Header>
        //   <Card.Body>
            
        //     <Card.Text>
        //       {item.Content}
        //     </Card.Text>

        //   </Card.Body>
        //   <Card.Footer>{dateFormat(item.createdAt,'yyyy-mm-dd')}</Card.Footer>
        // </Card>)
          return(
          <div style={{width:"28rem", 
          backgroundColor:"rgb(255,229,153)", 
          border:"2px silver solid",
          margin:"15px auto",
          borderRadius:"08px"
          }}>
            
            <div style={{display:"flex",justifyContent:"left",marginLeft:"20px"}}> 
            <p style={{paddingRight:"20px"}}>{(item.isImportant==true) ?
              <p>📌</p>:
            
              <p></p>
            }
            </p>
            <p>{item.isImportant}</p>
            <h3>{item.Title}</h3>
            </div>
           
            <p>{item.isImportant.value}</p>
            <p style={{display:"flex",justifyContent:"left",marginLeft:"20px"}}>{item.Content}</p>
            <div style={{display:"flex",justifyContent:"space-between",marginLeft:"20px"}}>
              <p>{dateFormat(item.createdAt,'yyyy-mm-dd')}</p>
              <div >
              <Button variant='light'>Edit</Button>{' '}
              <Button variant='light'>Delete</Button>{' '}
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