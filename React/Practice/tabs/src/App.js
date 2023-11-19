import React,{useState} from 'react';
import './App.css';
import Tabs  from './Components/Tabs';
import DisplayTabs from './Components/DisplayTabs';

function App() {
  const tabsArray = [
    {label: "Tab 1" , content: "Tab 1 content is showing here" },
    {labe2: "Tab 2" , content: "Tab 2 content is showing here" },
    {labe3: "Tab 3" , content: "Tab 3 content is showing here" },
    {label: "Tab 4" , content: "Tab 4 content is showing here" }
  ];
  const [allTabs , setAllTabs] = useState(tabsArray);
  const [currentTabIndex , setCurrentTabIndex] = useState(0);

  return (
    <div className="App">
      <Tabs  allTabs={allTabs} currentTabIndex={currentTabIndex} setCurrentTabIndex={setCurrentTabIndex}/>
      <DisplayTabs allTabs={allTabs} currentTabIndex={currentTabIndex}/>
    </div>
  );
}

export default App;
