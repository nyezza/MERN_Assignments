import React from 'react';
import {Routes, Route} from 'react-router-dom'
import CreateAuthor from './components/CreateAuthor'
import Dashboard from './components/Dashbord'
import UpdateOneAuthor from './components/UpdateOneAuthor'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 style={{marginTop:"20px"}}>Favorite authors</h1>
      <Routes>
        <Route path='/authors' element={<Dashboard />}/>
        <Route path='/authors/:id/edit' element={<UpdateOneAuthor />}/>
        <Route path='/authors/new' element={<CreateAuthor />} />
      </Routes>
    </div>
  );
}

export default App;
