import React, { useEffect } from "react";
import { line, select } from "d3";
import { lineChartData } from "../../testData";

const lineTitleTextStyle = {
  fontSize: "3px"
};

const LineChart = props => {
  const { selectedGroup, positionX, positionY } = props;
  const selectedData = lineChartData.filter(
    datum => datum.group === selectedGroup
  );


  return (
    <g transform={`translate(${positionX}, ${positionY})`}>
     
      <text
        textAnchor="middle"
        style={lineTitleTextStyle}
        fill="grey"
        x={20}
        y={1.5}
      >
        {selectedData[selectedData.length - 1].group}
      </text>
    
    </g>
  );
};

export default LineChart;