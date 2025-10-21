const pool = require('../../config/db');

async function createAppointment({ patient_id, doctor_id, datetime, reason }) {
  const result = await pool.query(
    'INSERT INTO appointments (patient_id, doctor_id, datetime, reason) VALUES ($1, $2, $3, $4) RETURNING *',
    [patient_id, doctor_id, datetime, reason]
  );
  return result.rows[0];
}

async function getAppointments() {
  const result = await pool.query('SELECT * FROM appointments');
  return result.rows;
}

module.exports = { createAppointment, getAppointments };