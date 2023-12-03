import React from 'react';
import {Routes,Route, Link} from 'react-router-dom'
import Form from './components/Form';
import OneHero from './components/OneHero'
import Error from './components/Error';
import './App.css';

function App() {
  return (
    <div className="App">
      <fieldset>
        <h1>Heros</h1>
        <div style={{
          display:'flex',
          justifyContent:'space-around'
        }}>
          <Link to="/">Home</Link>
        </div>
        <Routes>
          <Route path='/' element={<Form />}/>
          <Route path='/hero/:id' element={<OneHero />}/>
          <Route path='/error' element={<Error />}/>
        </Routes>
      </fieldset>
    </div>
  );
}

export default App;
