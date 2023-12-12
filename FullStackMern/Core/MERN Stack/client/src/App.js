import React from 'react'
import './App.css';
import {Routes,Route,Link,useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Dashboard from './components/Dashboard'
import CreateProduct from './components/CreateProduct'
import ShowOne from './components/ShowOne'
import UpdateOne from './components/UpdateOne'
function App() {
  const nav = useNavigate()
  const backFn=()=>{
    nav(-1)
  }
  return (
    <div className="App">
      <h1>Product Manager</h1>
        <Link to="/products"><Button variant="primary" style={{margin:"50px"}}>Dashboard</Button>{' '}</Link>
        <Routes>
          <Route path='/products' element={<Dashboard />} />
          <Route path='/products/new' element={<CreateProduct />}/>
          <Route path='/products/:id' element={<ShowOne />} />
          <Route path='/products/edit/:id' element={<UpdateOne />}/>
        </Routes>
        <Button variant="secondary" style={{margin:"50px"}} onClick={()=>backFn()}>Back</Button>{' '}
    </div>
  );
}

export default App;
