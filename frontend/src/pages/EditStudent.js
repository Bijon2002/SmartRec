import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({ name: '', age: '', class: '', grade: '', city: '', profilePic: '' });

  useEffect(() => {
    axios.get(`http://localhost:5000/api/students/${id}`)
      .then(res => setStudent(res.data))
      .catch(err => console.log(err));
  }, [id]);

  const handleChange = e => setStudent({ ...student, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/students/${id}`, student);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Edit Student</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={student.name} onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" value={student.age} onChange={handleChange} />
        <input type="text" name="class" placeholder="Class" value={student.class} onChange={handleChange} />
        <input type="text" name="grade" placeholder="Grade" value={student.grade} onChange={handleChange} />
        <input type="text" name="city" placeholder="City" value={student.city} onChange={handleChange} />
        <input type="text" name="profilePic" placeholder="Profile Pic URL" value={student.profilePic} onChange={handleChange} />
        <button type="submit">Update Student</button>
      </form>
    </div>
  );
}

export default EditStudent;
