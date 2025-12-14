import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StudentCard from '../components/StudentCard';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [students, setStudents] = useState([]);

  const fetchStudents = () => {
    axios.get('http://localhost:5000/api/students')
      .then(res => setStudents(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Student Dashboard</h1>
      <Link to="/add">
        <button style={{ padding: '10px 20px', marginBottom: '20px' }}>Add New Student</button>
      </Link>
      <div>
        {students.length === 0 ? (
          <p>No students found!</p>
        ) : (
          students.map(student => (
            <StudentCard key={student._id} student={student} refreshStudents={fetchStudents} />
          ))
        )}
      </div>
    </div>
  );
}

export default Dashboard;
