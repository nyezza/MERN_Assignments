
import React, { useState }  from 'react'
import {Navbar,Button} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, useParams } from 'react-router-dom';


const Form = (props) => {
   const{type}= useParams()
   //const {id} = useParams()
   const[id , setId] = useState("");

    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(id);
        console.log(type);
        setId("")
        Navigate(`/${type}/${id}`);
        
    }

    return (
    <>
            {/* "people": "https://swapi.dev/api/people/",
	"planets": "https://swapi.dev/api/planets/",
	"films": "https://swapi.dev/api/films/",
	"species": "https://swapi.dev/api/species/",
	"vehicles": "https://swapi.dev/api/vehicles/",
	"starships": "https://swapi.dev/api/starships/" */}
        {/* <Navbar variant="dark" bg="blue" expand="lg" >
        <form className="d-inline mx-2" onSubmit={submitHandler}>
            {/* <div className="d-inline mx-1">
                    <label>Search For</label>
                    <select>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                        {/* <option value="films">Films</option>
                        <option value="species">Species</option>
                        <option value="vehicles">Vehicles</option>
                        <option value="starships">Starships</option> 
                    </select>
            </div>
             
                <label>ID:</label>
                <input type='text' value={id} onChange={(e)=>{setId(e.target.value)}}/>

                <Button variant='primary'>Search</Button>
            </form>
        </Navbar> */}
        {console.log(id)}
        <form onSubmit={submitHandler}>
            <input type='text' value={id} onChange={(e)=>setId(e.target.value)} />
            <Button>search</Button>
        </form>
    </>
    )
}

export default Form