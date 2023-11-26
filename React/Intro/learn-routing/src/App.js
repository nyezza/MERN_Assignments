import {  Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import  Home  from "./components/Home";
import About  from "./components/About";
import  Notes  from "./components/Notes";
import  Note  from "./components/Note";
import  NewNote  from "./components/NewNote";


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="about" Component={About} />
          <Route path="notes" Component={Notes}>
            <Route path="new" Component={NewNote} />
            <Route path=":id" Component={Note} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
