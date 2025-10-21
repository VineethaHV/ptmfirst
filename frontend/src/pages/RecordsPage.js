import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function RecordsPage() {
  const { patientId } = useParams();
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get(`${process.env.REACT_APP_API_URL}/records/${patientId}`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setRecords(res.data));
  }, [patientId]);

  return (
    <div>
      <h2>Medical Records for Patient {patientId}</h2>
      <ul>
        {records.map(r => (
          <li key={r.id}>{r.notes} (Doctor ID: {r.doctor_id}, Date: {r.created_at})</li>
        ))}
      </ul>
    </div>
  );
}

export default RecordsPage;