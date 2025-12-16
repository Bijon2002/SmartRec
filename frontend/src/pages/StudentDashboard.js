import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function StudentDashboard() {
  const [student, setStudent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // No token → redirect to login
      navigate("/");
      return;
    }

    axios.get("http://localhost:5000/api/students/me", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => setStudent(res.data))
      .catch(err => {
        console.log(err);
        // Invalid token → redirect to login
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        navigate("/");
      });
  }, [navigate]);

  if (!student) return <p>Loading...</p>;

  return (
    <div>
      <h2>{student.name}</h2>
      <p>Class: {student.class}</p>
      <p>Grade: {student.grade}</p>
      <p>City: {student.city}</p>
    </div>
  );
}

export default StudentDashboard;
