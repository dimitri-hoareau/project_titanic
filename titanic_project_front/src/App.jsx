import React, { useState, useEffect } from 'react';
import DataTable from './DataTable'
import Graph from './Graph';
import './App.css'


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/passengers/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); 
  

  return (
    <>
      <Graph data={data} /> 
      <hr style={{ margin: '20px 0' }} />
      <DataTable data={data} />
    </>
  )
}

export default App
