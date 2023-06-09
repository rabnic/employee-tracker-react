import React, { useState, useEffect } from 'react';

import './App.css';
import AddEmployee from './components/AddEmployee';
import DisplayEmployees from './components/DisplayEmployees';

function App() {
  const [employees, setEmployees] = useState();
  const [currentEmployeeEdit, setCurrentEmployeeEdit] = useState(0);

  const addEmployeeHandler = (employee) => {
    let key = 1;
    let length = employees.length;
    if ( length > 0) {
      key = employees[length-1].key + 1;
    }
    employee.key = key;
    setEmployees([...employees, employee]);
    console.log(employees);
  }

  useEffect(() => {
    let storedData = localStorage.getItem('employeeDB') || [];
    if ((typeof storedData) == 'object') {
        setEmployees(storedData);
        localStorage.setItem('employeeDB', JSON.stringify(storedData));
    } else {
        setEmployees(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    employees && localStorage.setItem('employeeDB', JSON.stringify(employees));
  }, [employees])

  const editEmployee = (employee) => {

    const filterEditedProperties = (objOld, objNew) => {
      objOld = {...objOld}
      for (let key in objNew) {
          if (objNew[key]) {
            objOld[key] = objNew[key];
          }
      }
      return objOld
    };

      console.log('App.js', employee, 'key=', currentEmployeeEdit)

      setEmployees(employees.map(emp => {
        return emp.key === currentEmployeeEdit ? 
        filterEditedProperties(emp,employee)
        : 
        emp
      }))
  }

  const deleteEmployeeHandler = (employeeId) => {
    setEmployees(employees.filter(emp => emp.key !== employeeId));
  }

  return (
    <div className="App">
      <AddEmployee addEmployeeHandler={addEmployeeHandler} editEmployee={editEmployee}/>
      {employees && <DisplayEmployees employees={employees} delEmployee={deleteEmployeeHandler}  setCurrentEmployeeEdit={setCurrentEmployeeEdit}/>}
    </div>
  );
}

export default App;
