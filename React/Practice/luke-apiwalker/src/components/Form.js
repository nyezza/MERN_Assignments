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
    <Table striped bordered hover>
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
            <tr>
                {
                    elem.map((elt)=>{
                        return(
                            <div>
                            <th>{elt.name}</th>
                            <th>{elt.climate}</th>
                            <th>{elt.terrain}</th>
                            <th>{elt.surface_wate}</th>
                            <th>{elt.population}</th></div>
                    )})
                }
            </tr>
        </tbody>
    </Table>

        
    </fieldset>
  )
}

export default Form