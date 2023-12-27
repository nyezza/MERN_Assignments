import React from 'react';
import Dashboard from './components/Dashboard'
import CreateNote from './components/CreateNote'
import ShowOneNote from './components/ShowOneNote';
import UpdateNote from './components/UpdateNote'
import {Link,Routes,Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Notes</h1>
      <Link to='/notes' style={{margin:"100px",fontWeight:"bold", fontSize:"18px"}}>Home</Link>
      <Link to='/notes/new' style={{margin:"100px",fontWeight:"bold", fontSize:"18px"}}>Create</Link>
      <hr/>
      <Routes>
        <Route path='/notes' element={<Dashboard />}/>
        <Route path='/notes/new'element={<CreateNote />}/>
        <Route path='/notes/:id' element={<ShowOneNote />}/>
        <Route path='/notes/:id/edit' element={<UpdateNote />}/>
      </Routes>
    </div>
  );
}

export default App;
