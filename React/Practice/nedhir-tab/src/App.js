
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
    console.log(newTab);
    setTab([...tab,newTab])
    console.log(tab);
  }
  const DeleteTab =(id)=>{
    setTab(tab.filter((item,index)=>{return(index !==id)}))
    
  }

  return (
    <div className="App">
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand >Nedhir Tabs Assignment</Navbar.Brand>
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
        <Route path='/' element={<Display tab={tab} DeleteTab={DeleteTab} />} />
        <Route path='/new' element={<FormTab add={add}/>} />
      </Routes>
      
    </div>
  );
}

export default App;
