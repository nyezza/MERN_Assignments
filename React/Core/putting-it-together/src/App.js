import React from 'react';
import './App.css';
import Person from './components/Person';
function App() {
  
  
  return (
    <div className="App">
      <Person fisrtName="Jane" lastName="Doe" age={45} hairColor="Black" />
      <Person fisrtName="John" lastName="Smith" age={88} hairColor="Brown" />      
    </div>
  );
}

export default App;
