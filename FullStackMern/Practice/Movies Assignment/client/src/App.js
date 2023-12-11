import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import './App.css';
import Dashboard from './components/Dashbord'
import CreateMovie from './components/CreateMovie'
import CreateFilmMaker from './components/CreateFilmMaker';
import ShowOneMovie from './components/ShowOneMovie'
import EditOneMovie from './components/EditOneMovie'
import ShowOneFilmMaker from './components/ShowOneFilmMaker'
function App() {
  return (
    <div>

          <Link to="/"><Button variant="warning" style={{margin:"50px"}}>Home</Button>{' '}</Link>
          <div className="App">
            <Routes>
              <Route path='/' element={<Dashboard />}/>
              <Route path='/newMovie' element={<CreateMovie />}/>
              <Route path='/movie/:id' element={<ShowOneMovie />}/>
              <Route path='/movie/edit/:id' element={<EditOneMovie />}/>
              <Route path='/newFilmMaker' element={<CreateFilmMaker />}/>
              <Route path='/filmMaker/:id' element={<ShowOneFilmMaker />}/>
            </Routes>
          </div>
    </div>
  );
}

export default App;
