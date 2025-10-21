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

  const handleStatusChange = async (id, status) => {
    const token = localStorage.getItem('token');
    await axios.patch(`${process.env.REACT_APP_API_URL}/appointments/${id}/status`, { status }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setAppointments(appointments.map(a => a.id === id ? { ...a, status } : a));
  };

  return (
    <div>
      <h2>Appointments</h2>
      <ul>
        {appointments.map(a => (
          <li key={a.id}>
            Patient ID: {a.patient_id}, Doctor ID: {a.doctor_id}, Time: {a.datetime}, Reason: {a.reason}, Status: {a.status}
            {a.status === 'scheduled' && (
              <>
                <button onClick={() => handleStatusChange(a.id, 'cancelled')}>Cancel</button>
                <button onClick={() => handleStatusChange(a.id, 'rescheduled')}>Reschedule</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppointmentsPage;