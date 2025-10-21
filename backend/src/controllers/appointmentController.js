const { createAppointment, getAppointments, updateAppointmentStatus, getAppointmentsByUser } = require('../models/appointment');

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
    const { user } = req;
    const appointments = await getAppointmentsByUser(user.id, user.role);
    res.json(appointments);
  } catch (err) {
    next(err);
  }
}

async function changeStatus(req, res, next) {
  try {
    const { status } = req.body;
    const appointment = await updateAppointmentStatus(req.params.id, status);
    if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
    res.json(appointment);
  } catch (err) {
    next(err);
  }
}

module.exports = { scheduleAppointment, listAppointments, changeStatus };