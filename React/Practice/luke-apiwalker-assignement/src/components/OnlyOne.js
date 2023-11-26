import  Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const OnlyOne = (props) => {
    const {category} = useParams()
    const {id} = useParams()
    const [elem , setElem] = useState({})
    useEffect(() =>{
        Axios.get(`https://swapi.dev/api/${category}/${id}`)
        .then(res =>{
            console.log(res.data)
            return(setElem(res.data))
        } )
        .catch(err => console.log(err))
    },[category,id])
  return (
    <fieldset>
        {
            category==="people" ? 
            <div>
                <h1>{elem.name}</h1>
                <p><strong>Height:</strong> {elem.height} cm</p>
                <p><strong>Hair Color:</strong> {elem.mass} Kg</p>
                <p><strong>Eye Color:</strong> {elem.eye_color}</p>
                <p><strong>Skin Color:</strong> {elem.hair_color}</p>
            </div>
            : 
            <div>
                <h1>{elem.name}</h1>
                <p><strong>Climate:</strong> {elem.climate}</p>
                <p><strong>Terrain:</strong> {elem.terrain}</p>
                <p><strong>Surface Water:</strong> {elem.surface_water ? "true":"false"}</p>
                <p><strong>Population:</strong> {elem.population}</p>
            </div>
            

            
        }
    </fieldset>
  )
}

export default OnlyOne