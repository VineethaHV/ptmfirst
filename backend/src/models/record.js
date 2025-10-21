const pool = require('../../config/db');

async function createRecord({ patient_id, doctor_id, notes, created_at }) {
  const result = await pool.query(
    'INSERT INTO records (patient_id, doctor_id, notes, created_at) VALUES ($1, $2, $3, $4) RETURNING *',
    [patient_id, doctor_id, notes, created_at]
  );
  return result.rows[0];
}

async function getRecordsByPatient(patient_id) {
  const result = await pool.query('SELECT * FROM records WHERE patient_id = $1', [patient_id]);
  return result.rows;
}

module.exports = { createRecord, getRecordsByPatient };