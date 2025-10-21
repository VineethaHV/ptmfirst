const { createPatient, getPatients, getPatientById } = require('../models/patient');

async function registerPatient(req, res, next) {
  try {
    const patient = await createPatient(req.body);
    res.status(201).json(patient);
  } catch (err) {
    next(err);
  }
}

async function listPatients(req, res, next) {
  try {
    const patients = await getPatients();
    res.json(patients);
  } catch (err) {
    next(err);
  }
}

async function getPatient(req, res, next) {
  try {
    const patient = await getPatientById(req.params.id);
    if (!patient) return res.status(404).json({ message: 'Patient not found' });
    res.json(patient);
  } catch (err) {
    next(err);
  }
}

module.exports = { registerPatient, listPatients, getPatient };