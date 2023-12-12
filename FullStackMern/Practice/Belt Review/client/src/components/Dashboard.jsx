import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Card from 'react-bootstrap/Card';
import dateFormat from 'dateformat'
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
          return(<Card
          bg="warning"
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>{item.Title}</Card.Header>
          <Card.Body>
            
            <Card.Text>
              {item.Content}
            </Card.Text>

          </Card.Body>
          <Card.Footer>{dateFormat(item.createdAt,'yyyy-mm-dd')}</Card.Footer>
        </Card>)
        })
      }
    </div>
  )
}

export default Dashboard