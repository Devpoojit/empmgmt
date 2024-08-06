// src/components/EmployeeList.js
import React from 'react';

export default function EmployeeList({ employees, deleteEmployee }) {
  const getRowClass = (department) => {
    switch (department) {
      case 'Sales':
        return 'table-danger';
      case 'Purchase':
        return 'table-success';
      case 'Store':
        return 'table-primary';
      case 'HR':
        return 'table-warning';
      default:
        return '';
    }
  };

  return (
    <div className="mt-4">
      <h2>Employee List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Employee Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Department</th>
            <th>Email</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index} className={getRowClass(employee.department)}>
              <td>{index + 1}</td>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>{employee.salary}</td>
              <td>{employee.department}</td>
              <td>{employee.email}</td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteEmployee(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

