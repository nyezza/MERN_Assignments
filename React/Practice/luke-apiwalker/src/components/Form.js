import Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
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
    <>
            {/* "people": "https://swapi.dev/api/people/",
	"planets": "https://swapi.dev/api/planets/",
	"films": "https://swapi.dev/api/films/",
	"species": "https://swapi.dev/api/species/",
	"vehicles": "https://swapi.dev/api/vehicles/",
	"starships": "https://swapi.dev/api/starships/" */}
        <Navbar variant="dark" bg="dark" expand="lg">
            <div style={{display:"inline-block"}}>
                    <label>Search For</label>
                    <select name='type' id='type'>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                        <option value="films">Films</option>
                        <option value="species">Species</option>
                        <option value="vehicles">Vehicles</option>
                        <option value="starships">Starships</option>
                    </select>
            </div>
            <form>
                <label>ID:</label>
                <input type='text' />
                <Button variant='primary' style={{padding:'10px'}}>Search</Button>
            </form>
        </Navbar>
        
    <Table striped bordered hover variant="light">
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
                    elem.map((elt,index)=>{
                        return(
                            <tr key={index}>
                            <td>{elt.name}</td>
                            <td>{elt.climate}</td>
                            <td>{elt.terrain}</td>
                            <td>{elt.surface_water}</td>
                            <td>{elt.population}</td></tr>
                    )})
                }
            
        </tbody>
    </Table>

        
    </>
    )
}

export default Form