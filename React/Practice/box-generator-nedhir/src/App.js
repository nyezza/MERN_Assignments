import React,{useState} from 'react';
import './App.css';
import FormBox from './Components/FormBox';
import BoxDisplay from './Components/BoxDisplay';
function App() {
  const [boxColor , setBoxColor]=useState([])
  return (
    <div className="App">
      <BoxDisplay boxColor={boxColor} setBoxColor={setBoxColor} />
      <FormBox boxColor={boxColor} />
    </div>
  );
}

export default App;
