import Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Planets = (props) => {
    const{id}=props;
    const[elem , setElem] = useState({})
    useEffect(()=>{
        Axios.get(`https://swapi.dev/api/planets/${id}`)
        .then(res=>{
            console.log(res.data.results);
            setElem(res.data.results)
        })
        .catch(err=>console.log(err))
    },[props])
  return (
    <div style={{margin:"40px"}}>
            
                <h1>{elem.name}</h1>
                <h3>Climate: {elem.climate}</h3>
                <h3>Terrain: {elem.terrain}</h3>
                <h3>Surface Water: {elem.surface_water}</h3>
                <h3>Population: {elem.population}</h3>
        
    </div>
  )
}

export default Planets