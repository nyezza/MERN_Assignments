import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Form from './components/Form';
import People from './components/People';
import Planets from './components/Planets';
import './App.css';
import OnlyOne from './components/OnlyOne';
function App() {
  return (
    <fieldset>
      <div style={{
        display:'flex',
        justifyContent:'space-between',
        margin:'20px'
      }}>
        <Link to='/'>Home</Link>
        <Link to='/people'>All Peaople</Link>
        <Link to='/planets'>All Planets</Link>
      </div>
      
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/people' element={<People />} />
        {/* <Route path='/people/:id' element={<People />}/> */}
        <Route path='/planets' element={<Planets />} />
        {/* <Route path='/planets/:id' element={<Planets />} /> */}
        <Route path='/:category/:id' element={<OnlyOne />} />
      </Routes>
    </fieldset>
  );
}

export default App;
