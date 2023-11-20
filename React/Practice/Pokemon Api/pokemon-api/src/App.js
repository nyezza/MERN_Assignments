import React, { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [pokemon , setPokemon]= useState([])
  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then (response =>{
        console.log(response) 
        return response.json})
      .then (response =>{
        console.log(response);
        setPokemon(response)
        console.log(response)})
      .catch (err => console.log(err))
    
  },[])
  
  return (
    <div className="App">
    {
      pokemon.map((p,i)=>{
        return {p}
      })
    }
    </div>
  )
}

export default App;

