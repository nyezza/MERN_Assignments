
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,Routes,Route} from 'react-router-dom'
import FormTab from './components/FormTab';
import Display from './components/Display';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  const tabsArray =[
    {tite:"tab1", content: "This is the content on tab 1"},
    {tite:"tab2", content: "This is the content on tab 2"},
    {tite:"tab3", content: "This is the content on tab 3"},
    {tite:"tab4", content: "This is the content on tab 4"}
  ];
  const[tab, setTab] = useState(tabsArray);

  const add =(newTab)=>{
    setTab([...tab,newTab])
  }

  return (
    <div className="App">
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Nedhir Tabs Assignment</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/new">New Tab</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Routes>
        <Route path='/' element={<Display />} />
        <Route path='/new' element={<FormTab />} />
      </Routes>
      
    </div>
  );
}

export default App;
