import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Display from './components/Display';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Display />} />
      </Routes>
    </div>
  );
}

export default App;
