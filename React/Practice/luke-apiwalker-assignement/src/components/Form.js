import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
const Form = (props) => {
    const[category , setCategory] = useState('')
    const[id , setId] = useState(0)
    const nav = useNavigate();
    const submitHandler = (e) =>{
        e.preventDefault();
        console.log(id);
        console.log(category);
        nav(`/${category}/${id}`)
    }
  return (
    <form onSubmit={submitHandler}>
        <label htmlFor={category}>Serch For:</label>
        <select  onChange={(e)=>setCategory(e.target.value)}>
            <option value=''></option>
            <option value='people'>People</option>
            <option value='planets'>Planets</option>
        </select>
        <label>ID:</label>
        <input type='number' value={id} onChange={(e)=>setId(e.target.value)} />
        <button>Search</button>
    </form>
  )
}

export default Form