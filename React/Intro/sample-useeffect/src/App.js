import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import './App.css';

function App () {
    const [heroes , setHeroes] = useState([]);
    useEffect(()=> {
        Axios.get("https://akabab.github.io/superhero-api/api/all.json")
        // .then(her=>{
        //     console.log(her.data)
        // })
        .then(her =>{
            console.log(her.data);
            setHeroes(her.data)
            console.log(her.data);
        })
        .catch(err=> console.log(err))
    }, [])
    return (
    <h1>App</h1>
    )
}

export default App;