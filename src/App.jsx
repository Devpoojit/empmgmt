// src/App.js
import React, { useState } from 'react';
import EmployeeList from './EmployeeList';
import AddEmployee from './AddEmployee';

export default function App() {
    const [employees, setEmployees] = useState([]);
  
    const addEmployee = (employee) => {
      setEmployees([...employees, employee]);
    };
  
    const deleteEmployee = (index) => {
      window.confirm('Are you sure you want to delete this employee?') ?
      setEmployees(() => {
        const tempEmployees = [...employees];
        tempEmployees.splice(index, 1);
        return tempEmployees;
      }) : setEmployees(employees);
    };
  
    const [selectedDepartment, setSelectedDepartment] = useState('');
  
    const filteredEmployees = employees.filter((employee) =>
      selectedDepartment ? employee.department === selectedDepartment : true
    );
  
    return (
      <div className="App container mt-4">
        <h1 className="mb-4 text-center">Employee Management</h1>
        <div className="row">
          <div className="col-md-6">
            <AddEmployee addEmployee={addEmployee} />
          </div>
        </div>
  
        <div className="text-center">
          <h2>Filter by Department</h2>
        <div className="row justify-content-center">
        <div className="col-auto">
          <button
            className="btn btn-secondary m-1" onClick={() => setSelectedDepartment('')}>
            All
          </button>
          </div>
          <div className="col-auto">
          <button
            className="btn btn-secondary m-1" onClick={() => setSelectedDepartment('Sales')}>
            Sales
          </button>
          </div>
          <div className="col-auto">
          <button
            className="btn btn-secondary m-1" onClick={() => setSelectedDepartment('Purchase')}>
            Purchase
          </button>
          </div>
            <div className="col-auto">
            <button
            className="btn btn-secondary m-1" onClick={() => setSelectedDepartment('Store')}>
            Store
          </button>
            </div>
            <div className="col-auto">
            <button
            className="btn btn-secondary m-1" onClick={() => setSelectedDepartment('HR')}>
            HR
          </button>
            </div>
        </div>
        </div>
  
        <EmployeeList employees={filteredEmployees} deleteEmployee={deleteEmployee} />
      </div>
    );
  }
  
