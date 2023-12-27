import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Display = (props) => {
    const [todoList ,setTodoList] = useState([])
    const[todo , setTodo]= useState('')

    const submitHandler=(e)=>{
        e.preventDefault()
        setTodoList([...todoList,todo]);
        setTodo('')
    }
    const removeTodo=(id)=>{
        setTodoList(todoList.filter((item,index)=>{return(index !== id)}))
    }
    
  return (

    <div>
        <Form onSubmit={submitHandler}>
            <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label>New :</Form.Label>
                <Form.Control type="text" placeholder="what want you to do"  onChange={(e)=>setTodo(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">Add</Button>
        </Form>
            {
                todoList.map((item,index)=>{
                    return(
                        <div key={index} style={{display:'flex',
                                    justifyContent:"space-around"}}>
                            <input type='checkbox' style={{margin:"5px"}}/>
                            <p style={{margin:"5px"}}> {item}</p>
                            {''}<Button variant='danger' onClick={()=>removeTodo(index)}>Delete</Button>
                        </div>
                        
                    )
                })
            }

    </div>
  )
}

export default Display