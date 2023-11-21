import React, { useEffect, useState } from 'react'
import './App.css';
function App() {
  const [pokemon , setPokemon] = useState([])
  useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(pok => {
      console.log(pok);
      return pok.json()
    })
    .then(pok => {
      console.log(pok.results);
      setPokemon(pok.results);
      console.log(pok.results);
    })
    .catch(err => console.log(err))
  })
  
  return (
    <div className="App">
      {
        pokemon.map((p,index)=>{
          return(
            <li key={index}>{p.name}</li>
          )
        })
      }
    </div>
  )
}

export default App;

