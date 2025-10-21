import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AppointmentsPage() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get(`${process.env.REACT_APP_API_URL}/appointments`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setAppointments(res.data));
  }, []);

  return (
    <div>
      <h2>Appointments</h2>
      <ul>
        {appointments.map(a => (
          <li key={a.id}>
            Patient ID: {a.patient_id}, Doctor ID: {a.doctor_id}, Time: {a.datetime}, Reason: {a.reason}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppointmentsPage;