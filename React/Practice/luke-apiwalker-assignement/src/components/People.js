import React, { useEffect, useState } from 'react'
import Axios from 'axios'
const People = (props) => {
    const[people , setPeople] = useState([]);
    useEffect(()=>{
        Axios.get("https://swapi.dev/api/people")
        .then(res => {
            console.log(res.data.results);
            return setPeople(res.data.results)
        })
        .catch(err => console.log(err));
    },[])
  return (
    <fieldset>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Height</th>
                    <th>Mass</th>
                    <th>Eye Color</th>
                    <th>Skin Color</th>
                </tr>
            </thead>
            <tbody>
                {
                    people.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.height} cm</td>
                                <td>{item.mass} Kg</td>
                                <td>{item.eye_color}</td>
                                <td>{item.hair_color}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </fieldset>
  )
}

export default People