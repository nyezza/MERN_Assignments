import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
import {Button, Table} from 'react-bootstrap'
const Form = (props) => {
    const nav = useNavigate()
    const [heroes , setHeroes] = useState([])
    const[num , setNum] = useState(0)

    useEffect(() => {
        Axios.get(`https://akabab.github.io/superhero-api/api/all.json`)
        .then(res =>{
            console.log(res.data);
            return (setHeroes(res.data))
        })
        .catch(err=>{
            console.log(err);
            nav("/error")
        })
    },[props])
    
    const submitHandler =(e) => {
        e.preventDefault();
        nav ("/hero/"+ num)
        console.log(num);
    }

  return (
    <fieldset>
        <form onSubmit={submitHandler}>
            <label>please a number</label>
            <input type='number' value={num} onChange={(e)=>setNum(e.target.value)} />
            <button>Search</button>
        </form>

        <Table striped bordered hover variant="light">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Full Name</th>
                    <th>Publisher</th>
                </tr>
            </thead>
            <tbody>
                {
                    heroes.map((item,index)=> {
                        return(
                            
                        <tr key={index}>
                            <th> <a href='' onClick={()=>nav('/hero/'+item.id)}> {item.id} </a></th>
                            
                            <th>{item.name}</th>
                            <th><img src={item.images.sm} alt={item.name} width="200px"/></th>
                            <th>{item.biography.fullName ? item.biography.fullName : "there are no data, Sorry!!!"}</th>
                            <th>{item.biography.publisher}</th>
                        </tr>)
                    })
                }
            </tbody>
        </Table>
    </fieldset>
  )
}

export default Form