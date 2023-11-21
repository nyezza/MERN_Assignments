import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import './App.css';

function App () {
    const [heroes , setHeroes] = useState([]);
    useEffect=(()=> {
        fetch("https://akabab.github.io/superhero-api/api/all.json")
        .then(her=>{
            console.log(her)
        })
        .then(her =>{
            console.log(her);
            setHeroes(her)
            console.log(her);
        })
        .catch(err=> console.log(err))
    }, [])
    return (
    <h1>App</h1>
    )
}

export default App;