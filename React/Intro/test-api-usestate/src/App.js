import './App.css';
import React,{useEffect, useState} from 'react';
import Axios from 'axios';
function App() {
  const [heroes , setHeroes] = useState([]);
  useEffect(()=>{
    Axios.get("https://akabab.github.io/superhero-api/api/all.json")
    .then(hero=>{
      console.log(hero.data);
      setHeroes(hero.data);
      console.log(hero.data);
    })
    .catch(err=>console.log(err))
  },[])
  return (
    <fieldset> 
      <legend>App</legend>
      <div className="App">
        {
          heroes.map(h=>{
            return(
              <ul style={{listStyleType:"square"}}>{h.name}</ul>
            )
          })
        }
      </div>
    </fieldset>
  );
}

export default App;
