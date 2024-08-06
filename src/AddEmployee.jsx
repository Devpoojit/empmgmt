// src/components/AddEmployee.js
import React, { useState } from 'react';

export default function AddEmployee({ addEmployee }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [salary, setSalary] = useState('');
  const [department, setDepartment] = useState('Choose Department');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = { name, age, salary, department, email };
    addEmployee(newEmployee);
    setName('');
    setAge('');
    setSalary('');
    setDepartment('Choose Department');
    setEmail('');
  };

  return (
    <div className="mb-4">
      <h2 className="text-center">Add Employee</h2>
      <form onSubmit={handleSubmit} className="row justify-content-center">
        <div className="form-group col-md-5">
          <label>Name:</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group col-md-5">
          <label>Age:</label>
          <input type="number" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} required />
        </div>
        <div className="form-group col-md-5">
          <label>Salary:</label>
          <input type="number" className="form-control" value={salary} onChange={(e) => setSalary(e.target.value)} required/>
        </div>
        <div className="form-group col-md-5">
          <label>Department:</label>
          <select
            className="form-control" value={department} onChange={(e) => setDepartment(e.target.value)}>
            <option value="Choose Department" disabled>Choose Department</option>
            <option value="Sales">Sales</option>
            <option value="Purchase">Purchase</option>
            <option value="Store">Store</option>
            <option value="HR">HR</option>
          </select>
        </div>
        <div className="form-group col-md-10">
          <label>Email:</label>
          <input type="email"
            className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div className="form-group col-md-10 text-center">
          <button type="submit" className="btn btn-primary">Add Employee</button>
        </div>
      </form>
    </div>
  );
}
