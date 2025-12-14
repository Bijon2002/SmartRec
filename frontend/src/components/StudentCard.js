import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function StudentCard({ student, refreshStudents }) {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/edit/${student._id}`);
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await axios.delete(`http://localhost:5000/api/students/${student._id}`);
        refreshStudents(); // refresh the list after delete
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div style={{ border: '1px solid #333', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h3>{student.name}</h3>
      <p>Class: {student.class} | Grade: {student.grade}</p>
      <p>City: {student.city}</p>
      {student.profilePic && <img src={student.profilePic} alt="profile" style={{ width: '100px', borderRadius: '50%' }} />}
      <div style={{ marginTop: '10px' }}>
        <button onClick={handleEdit} style={{ marginRight: '10px' }}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default StudentCard;
