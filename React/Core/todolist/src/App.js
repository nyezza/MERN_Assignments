import React,{useState} from 'react'
import './App.css';

function App() {
  const [toDoList , setTodoList] = useState([]);

const updateToDoList = (newtoDo)=>{
  setTodoList=((oldToDo)=>[...oldToDo,newtoDo]);
}

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
