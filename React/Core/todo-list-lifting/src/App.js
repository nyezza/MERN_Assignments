import React, { useState } from 'react';
import './App.css';
import { Form } from 'react-bootstrap';
import Display from './components/Display';

function App() {
  const [tabList , setTabList] = useState([])
  

  const add=(newOne)=>{
    setTabList([...tabList,newOne])
  }
  return (
    <div className="App">
      <Form add={add}/>
      <Display />
    </div>
  );
}

export default App;
