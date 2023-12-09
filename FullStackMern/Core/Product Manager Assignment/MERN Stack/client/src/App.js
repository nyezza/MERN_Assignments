import React from 'react';
import Button from 'react-bootstrap/Button';
import {Link,Route,Routes} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import CreateProduct from './components/CreateProduct';
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to="/"><Button variant="warning" style={{margin:"50px"}}>Dashboard</Button>{' '}</Link>
      <Routes>
        <Route path='/' element={<Dashboard />} />
      </Routes>
      <h1>Dashboard</h1>
    </div>
  );
}

export default App;
