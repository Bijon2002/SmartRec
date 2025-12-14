import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddStudent() {
  const [student, setStudent] = useState({
    name: '',
    age: '',
    class: '',
    grade: '',
    city: '',
    profilePic: ''
  });

  const navigate = useNavigate();

  const handleChange = e => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/students', student);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Add Student</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" onChange={handleChange} />
        <input type="text" name="class" placeholder="Class" onChange={handleChange} />
        <input type="text" name="grade" placeholder="Grade" onChange={handleChange} />
        <input type="text" name="city" placeholder="City" onChange={handleChange} />
        <input type="text" name="profilePic" placeholder="Profile Pic URL" onChange={handleChange} />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;
