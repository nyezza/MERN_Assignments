import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import './App.css';

function App() {
  const [heroes , setHeroes] = useState([]);

  useEffect=(()=>{
    Axios.get("https://akabab.github.io/superhero-api/api/all.json")
    .then (res=>{ 
      console.log(res.data);
      setHeroes(res.data) 
      console.log(heroes)
    })
    .catch(err=>console.log(err))
  },[])
  return (
    <div className="App">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Full Name</th>
              <th>Publisher</th>
            </tr>
          </thead>
          <tbody>
          {
          heroes.map((hero,k)=>{
            return(
              <tr key={k}>
                <th>{hero.id}</th>
                <th>{hero.name}</th>
                <th>{hero.biography.fullName}</th>
                <th>{hero.biography.publisher ? hero.biography.publisher : "no data"}</th>
              </tr>
            )
          })
        }
          </tbody>
        </table>
        
    </div>
  );
}

export default App;
