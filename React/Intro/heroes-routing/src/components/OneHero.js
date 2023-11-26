import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import Axios  from 'axios'
const OneHero = () => {
    const nav = useNavigate()
    const {id} = useParams()
    const [one , setOne] = useState({});
    useEffect(() =>{
      Axios.get(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
      .then(res => {
        console.log(res.data);
        return setOne(res.data)})
      .catch(err => {
        console.log(err);
        nav("/error")
      })
    },[id])
  return (
    <fieldset>
      <Table striped bordered hover variant="light">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Full Name</th>
                    <th>Publisher</th>
                </tr>
            </thead>
            <tbody>
                {/* {
                    one.map(item => {
                        return(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td><img src={item.images.sm} alt={item.name} widtd="200px"/></td>
                            <td>{item.biography.fullName ? item.biography.fullName : "tdere are no data, Sorry!!!"}</td>
                            <td>{item.biography.publisher}</td>
                        </tr>)
                    })
                } */}
                
                        <tr>
                            <td>{one.id}</td>
                            <td>{one.name}</td>
                            {/* <td><img src={one.images["sm"]} alt={one.name} widtd="200px"/></td>
                            <td>{one.biography["fullName"] ? one.biography["fullName"] : "tdere are no data, Sorry!!!"}</td>
                            <td>{one.biography["publisher"]}</td> */}
                        </tr>
                  
              
            </tbody>
        </Table>
    </fieldset>
  )
}

export default OneHero