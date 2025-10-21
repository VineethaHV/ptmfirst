const pool = require('../../config/db');

async function createPatient({ name, dob, contact, address }) {
  const result = await pool.query(
    'INSERT INTO patients (name, dob, contact, address) VALUES ($1, $2, $3, $4) RETURNING *',
    [name, dob, contact, address]
  );
  return result.rows[0];
}

async function getPatients() {
  const result = await pool.query('SELECT * FROM patients');
  return result.rows;
}

async function getPatientById(id) {
  const result = await pool.query('SELECT * FROM patients WHERE id = $1', [id]);
  return result.rows[0];
}

module.exports = { createPatient, getPatients, getPatientById };