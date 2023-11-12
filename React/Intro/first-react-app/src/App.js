import './App.css';
import React, {useState} from 'react'

function App() {
  const [text, setText] = useState("");
  
  return (
    <div>
      
        <button onClick={setText(text + "state state I am setting state!!!")}>click Me</button>
        <p>{text}</p>;
    </div>
  );
}

export default App;
