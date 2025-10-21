const { createAppointment, getAppointments } = require('../models/appointment');

async function scheduleAppointment(req, res, next) {
  try {
    const appointment = await createAppointment(req.body);
    res.status(201).json(appointment);
  } catch (err) {
    next(err);
  }
}

async function listAppointments(req, res, next) {
  try {
    const appointments = await getAppointments();
    res.json(appointments);
  } catch (err) {
    next(err);
  }
}

module.exports = { scheduleAppointment, listAppointments };