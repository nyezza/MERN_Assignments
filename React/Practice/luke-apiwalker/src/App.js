import React from 'react';
import Form from './components/Form';
import Planets from './components/Planets';
import People from './components/People';
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
  
    <Routes>
      <Route exact path='/' element={<Form />} />
      <Route path='/planets/:id' element={<Planets />} />
      <Route path='/people/:id' element={<People />} />
    </Routes>
    </>
  );
}

export default App;
