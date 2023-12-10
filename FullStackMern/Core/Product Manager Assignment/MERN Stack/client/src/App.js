import React from 'react';
import Button from 'react-bootstrap/Button';
import {Link,Route,Routes, useNavigate} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import CreateProduct from './components/CreateProduct';
import './App.css';
import EditProduct from './components/EditProduct';
import DisplayOne from './components/DisplayOne';

function App() {
  const nav = useNavigate()
  const retourFn=()=>{
    nav(-1)
  }
  return (
    <div className="App">
      <h1 style={{margin:"50px"}}>Product Manager</h1>
      <Link to="/"><Button variant="warning" style={{margin:"20px"}}>Dashboard</Button>{'              '}</Link>
      <Button variant="secondary" onClick={()=>{retourFn()}} >Retour</Button>{' '}
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/new' element={<CreateProduct />} />
        <Route path='/product/:id' element={<DisplayOne />}/>
        <Route path='/product/edit/:id' element={<EditProduct />}/>
      </Routes>
      
    </div>
  );
}

export default App;
