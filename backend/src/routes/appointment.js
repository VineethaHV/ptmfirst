const express = require('express');
const router = express.Router();
const { scheduleAppointment, listAppointments } = require('../controllers/appointmentController');
const { authenticateToken } = require('../middleware/auth');

router.post('/', authenticateToken, scheduleAppointment);
router.get('/', authenticateToken, listAppointments);

module.exports = router;