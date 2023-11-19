import React,{useState} from 'react';
import Form from './Components/Form';
import './App.css';
import Display from './Components/Display';

function App() {
  const [boxes, setBoxes]=useState([])
  const addNew=(color,width,height)=>{
    const oneBox={colorBox:color , heightBox:height , widthBox:width}
    setBoxes([...boxes,oneBox])
    console.log(oneBox);
  }
    

  return (
    <fieldset>
      <legend>APP</legend>
      <div className="App">
        <Form addNewBox={addNew} />
        <Display boxes={boxes} />
      </div>
    </fieldset>
    
  );
}

export default App;
