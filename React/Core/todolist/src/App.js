import React,{useState} from 'react'
import './App.css';
cosnt [toDoList , setTodoList] = useState([]);

const updateToDoList = (newtoDo)=>{
  setTodoList=((oldToDo)=>[...oldToDo,newtoDo]);
}

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
