import Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
const Form = (props) => {
    const[elem , setElem] = useState([])
    useEffect(()=>{
        Axios.get("https://swapi.dev/api/planets")
        .then(res=>{
            console.log(res.data.results);
            setElem(res.data.results)
        })
        .catch(err=>console.log(err))
    },[])
  return (
    <fieldset>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Climate</th>
                <th>Terrain</th>
                <th>Surface Water</th>
                <th>Population</th>
            </tr>
        </thead>
        <tbody>
            
                {
                    elem.map((elt)=>{
                        return(
                            <tr>
                            <th>{elt.name}</th>
                            <th>{elt.climate}</th>
                            <th>{elt.terrain}</th>
                            <th>{elt.surface_water}</th>
                            <th>{elt.population}</th></tr>
                    )})
                }
            
        </tbody>
    </table>

        
    </fieldset>
  )
}

export default Form