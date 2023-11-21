import { useState, useEffect } from 'react';
import Axios from "axios"
import './App.css';

function App() {

  // anything dynamic needs UseState
  const [heroes, setHeroes] = useState([])

  //!------------------------- UseEffect
  useEffect(() => {
    Axios.get("https://akabab.github.io/superhero-api/api/all.json")
      .then(res => {
        // Axios Wraps everything in .data
        console.log(res.data)
        setHeroes(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])



  //!------------------------- Axios
  const AxiosHeroes = () => {
    Axios.get("https://akabab.github.io/superhero-api/api/all.json")
      .then(res => {
        // Axios Wraps everything in .data
        console.log(res.data)
        setHeroes(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }


  //!--------------------- Fetch
  const fetchHeroes = () => {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then((heroRes) => {
        console.log(heroRes)
        return heroRes.json()
      }).then(heroRes => {
        console.log(heroRes)
        setHeroes(heroRes)
        console.log(heroRes)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="App">
      <h1> 🦸 🦹  SupperHeroes 🦸‍♀️ 🦹‍♀️ </h1>
      <h4>fetch /Axios / useEffect</h4>
      <hr />
      {/* {JSON.stringify(heroes)} */}
      <button className="btn btn-success" onClick={fetchHeroes}> fetch SupperHeroes</button>
      <button className="btn btn-primary" onClick={AxiosHeroes}> Axios SupperHeroes</button>
      <hr />
      <table >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Hero Name</th >
            <th scope="col">Full Name</th>
            <th scope="col">Publisher</th>
          </tr>
        </thead>
        <tbody>
          {
            heroes.map(hero => {
              return (
                <tr key={hero.id}>
                  <th scope="row">{hero.id}</th>
                  <td><img src={hero.images.sm}width="120px"/></td>
                  <td>{hero.name}</td>
                  <td>{hero.biography.fullName ? hero.biography.fullName : "No Data"}</td>
                  <td>{hero.biography.publisher}</td>
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