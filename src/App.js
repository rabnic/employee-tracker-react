import React, { useState } from 'react';

import './App.css';
import AddEmployee from './components/AddEmployee';
import DisplayEmployees from './components/DisplayEmployees';
import data from './data.json';

function App() {
  const [employees, setEmployees] = useState([]);
  const [currentEmployeeEdit, setCurrentEmployeeEdit] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const addEmployeeHandler = (employee) => {
    setEmployees([...employees, employee]);
    console.log(employees);
  }

  const updateEmployeeHandler = (employee) => {

  }

  const populateForEdit = () => {

  }

  const employeeUnderEdit = (employee) => {
      setCurrentEmployeeEdit(employee);
  }

  const deleteEmployeeHandler = (employeeId) => {
    setEmployees(employees.filter(emp => emp.id !== employeeId));
  }

  return (
    <div className="App">
      <AddEmployee addEmployeeHandler={addEmployeeHandler} currentEmployeeEdit={currentEmployeeEdit}/>
      <DisplayEmployees employees={employees} delEmployee={deleteEmployeeHandler} toEdit={employeeUnderEdit} />
    </div>
  );
}

export default App;
