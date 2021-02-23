import React, { useState } from "react";
import DonutComponent from "./components/DonutChart/DonutComponent";
import BarChart from "./components/BarChart/BarChart";
import LineChart from "./components/LineChart/LineChart";
import Main from './components/main/Main'
import ContainedButtons from './components/ContainedButtons'
import './App.css'
import FilterSection from "./components/FilterSection";


const App = props => {
  
  const [selectedGroup, setSelectedGroup] = useState("Quality Score");
  const [groupColour, setGroupColour] = useState("#4E79A7");

  //function that will hook into the state to change it
  function updateBarChart(group, colour) {
    setSelectedGroup(group);
    setGroupColour(colour);
  }

  return (
    <div className="app">
      <Main />
      <div className="container">
        <div className="card">
          <div className="cardFilter">
            <FilterSection />
            <ContainedButtons />
          </div>
        <div className="cardSvg">
          <svg viewBox="-10 0 100 100" preserveAspectRatio="xMidYMid meet" >
        <DonutComponent x={6} y={20} onChangeGroup={updateBarChart} />
        <BarChart 
          positionX={41}
          positionY={39}
          width={80}
          height={100}
          selectedGroup={selectedGroup}
          barColour={groupColour}
        />
        <LineChart
          positionX={36}
          positionY={1}
          selectedGroup={selectedGroup}
          lineColour={groupColour}
        />
      </svg>
     </div>
    
      </div>
      </div>
     

      
    </div>
  );
};

export default App;