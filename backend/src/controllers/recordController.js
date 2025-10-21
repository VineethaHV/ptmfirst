const { createRecord, getRecordsByPatient } = require('../models/record');

async function addRecord(req, res, next) {
  try {
    const record = await createRecord(req.body);
    res.status(201).json(record);
  } catch (err) {
    next(err);
  }
}

async function listRecords(req, res, next) {
  try {
    const records = await getRecordsByPatient(req.params.patient_id);
    res.json(records);
  } catch (err) {
    next(err);
  }
}

module.exports = { addRecord, listRecords };