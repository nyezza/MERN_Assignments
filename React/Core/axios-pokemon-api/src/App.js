import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import './App.css';
function App() {

  const [pokemon , setPokemon] = useState([])

  useEffect(()=>{
    Axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(pok => {
      console.log(pok.data.results);
      setPokemon(pok.data.results);
      console.log(pok.data.results);
    })
    .catch(err => console.log(err))
  },[])
  return (
    
    <div className="App">
      {/* {JSON.stringify(pokemon)} */}
      {
        pokemon.map(p=> {return(
          <li>{p.name}</li>
        )})
      }
    </div>
  );
}

export default App;
