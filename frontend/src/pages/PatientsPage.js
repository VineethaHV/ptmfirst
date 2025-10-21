import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PatientsPage() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get(`${process.env.REACT_APP_API_URL}/patients`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setPatients(res.data));
  }, []);

  return (
    <div>
      <h2>Patients</h2>
      <ul>
        {patients.map(p => (
          <li key={p.id}>{p.name} (DOB: {p.dob})</li>
        ))}
      </ul>
    </div>
  );
}

export default PatientsPage;