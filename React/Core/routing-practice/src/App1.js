import React from 'react';
import Home from './components/Home';
import Number from './components/Number';
import Word from './components/Word';
import ColorText from './components/ColorText';
import {Routes,Route} from 'react-router-dom'
import './App.css';

function App() {

  return (
    <fieldset>
      <div className="App">

        <Routes>
          <Route path="/Home" element={<Home />}/>
          <Route path="/:n" element={<Number />} />
          <Route path="/:word" element={<Word />} />
          <Route path=":word/:tc/:bg" element={<ColorText />} />
        </Routes>
      </div>
    </fieldset>
   
    
  );
}

export default App;
