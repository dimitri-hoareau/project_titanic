import React, { useState } from 'react';
import './DataTable.css'; 

const DataTable = ({ data }) => {

  const [visibleColumns, setVisibleColumns] = useState({
    PassengerId: true,
    Survived: true,
    Pclass: true,
    Name: true,
    Sex: true,
    Age: true,
    SibSp: true,
    Parch: true,
    Ticket: true,
    Fare: true,
    Cabin : true,
    Embarked: true,
  });

  const toggleColumn = (column) => {
    setVisibleColumns({
      ...visibleColumns,
      [column]: !visibleColumns[column],
    });
  };

  
  return (
  <>
    <div className="column-controls">
      {Object.keys(visibleColumns).map((column, index) => (
        <label key={index}>
          <input
            type="checkbox"
            checked={visibleColumns[column]}
            onChange={() => toggleColumn(column)}
          />
          {column}
        </label>
      ))}
    </div>
    
    <table>
    <thead>
      <tr>
        {visibleColumns.PassengerId && <th>ID</th>}
        {visibleColumns.Survived && <th>Survived</th>}
        {visibleColumns.Pclass && <th>Class</th>}
        {visibleColumns.Name && <th>Name</th>}
        {visibleColumns.Sex && <th>Sex</th>}
        {visibleColumns.Age && <th>Age</th>}
        {visibleColumns.SibSp && <th>Siblings/Spouses</th>}
        {visibleColumns.Parch && <th>Parents/Children</th>}
        {visibleColumns.Ticket && <th>Ticket</th>}
        {visibleColumns.Fare && <th>Fare</th>}
        {visibleColumns.Cabin && <th>Cabin</th>}
        {visibleColumns.Embarked && <th>Embarked</th>}
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          {visibleColumns.PassengerId && <td>{item.PassengerId}</td>}
          {visibleColumns.Survived && <td>{item.Survived ? 'Yes' : 'No'}</td>}
          {visibleColumns.Pclass && <td>{item.Pclass}</td>}
          {visibleColumns.Name && <td>{item.Name}</td>}
          {visibleColumns.Sex && <td>{item.Sex}</td>}
          {visibleColumns.Age && <td>{item.Age}</td>}
          {visibleColumns.SibSp && <td>{item.SibSp}</td>}
          {visibleColumns.Parch && <td>{item.Parch}</td>}
          {visibleColumns.Ticket && <td>{item.Ticket}</td>}
          {visibleColumns.Fare && <td>{item.Fare}</td>}
          {visibleColumns.Cabin && <td>{item.Cabin || 'N/A'}</td>}
          {visibleColumns.Embarked && <td>{item.Embarked}</td>}
        </tr>
      ))}
    </tbody>
    </table>
    </>
  );
};

export default DataTable;