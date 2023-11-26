import Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const People = (props) => {
    const[elem , setElem] = useState({})
    const {id} = props;
    useEffect(()=>{
        Axios.get(`https://swapi.dev/api/people/${id}`)
        .then(res=>{
            console.log(res.data);
            setElem(res.data)

        })
        .catch(err=>console.log(err))
    },[props])
  return (
    <div style={{margin:"40px"}}>
                <h1>{elem.name}</h1>
                <h3>Height: {elem.height}</h3>
                <h3>mass: {elem.mass}  kg</h3>
                <h3>Eye Color: {elem.eye_color}</h3>
                <h3>Skin Color:{elem.skin_color} </h3>
    </div>
  )
}

export default People