import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import './Graph.css'; 

const Graph = ({ data }) => {


    let dead = 0
    let survived = 0

    data.map((item) => {
        console.log(item)
        if (item.Survived === false) {
            dead++
        } else {    
            survived++
        }
    })

    const chartData = [
        { id: 0, value: dead, label: 'Dead' },
        { id: 1, value: survived, label: 'Survived' },
    ]
    

  return (
    <div className='pie-chart-box'>
    <PieChart
      series={[
        {
          data: chartData,
        },
      ]}
      width={400}
      height={200}
    />
    <h2>survivor's rate</h2>
    </div>
  );
};

export default Graph;