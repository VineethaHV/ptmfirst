const pool = require('../../config/db');

async function createAppointment({ patient_id, doctor_id, datetime, reason, status = 'scheduled' }) {
  const result = await pool.query(
    'INSERT INTO appointments (patient_id, doctor_id, datetime, reason, status) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [patient_id, doctor_id, datetime, reason, status]
  );
  return result.rows[0];
}

async function getAppointments() {
  const result = await pool.query('SELECT * FROM appointments');
  return result.rows;
}

async function updateAppointmentStatus(id, status) {
  const result = await pool.query(
    'UPDATE appointments SET status = $1 WHERE id = $2 RETURNING *',
    [status, id]
  );
  return result.rows[0];
}

async function getAppointmentsByUser(user_id, role) {
  let query, params;
  if (role === 'doctor') {
    query = 'SELECT * FROM appointments WHERE doctor_id = $1';
    params = [user_id];
  } else if (role === 'patient') {
    query = 'SELECT * FROM appointments WHERE patient_id = $1';
    params = [user_id];
  } else {
    query = 'SELECT * FROM appointments';
    params = [];
  }
  const result = await pool.query(query, params);
  return result.rows;
}

module.exports = { createAppointment, getAppointments, updateAppointmentStatus, getAppointmentsByUser };