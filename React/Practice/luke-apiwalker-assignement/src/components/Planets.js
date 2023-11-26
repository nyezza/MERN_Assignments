import React,{useEffect, useState} from 'react'
import Axios from 'axios'
const Planets = (props) => {
    const[planet , setPlanet] = useState([])
    useEffect(() =>{
        Axios.get("https://swapi.dev/api/planets")
        .then(res => setPlanet(res.data.results))
        .catch(err => console.log(err))
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
                    planet.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.cliamte}</td>
                                <td>{item.terrain}</td>
                                <td>{item.surface_water ? "true":"false"}</td>
                                <td>{item.population}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </fieldset>
  )
}

export default Planets