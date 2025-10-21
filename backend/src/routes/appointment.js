const express = require('express');
const router = express.Router();
const { scheduleAppointment, listAppointments, changeStatus } = require('../controllers/appointmentController');
const { authenticateToken } = require('../middleware/auth');

router.post('/', authenticateToken, scheduleAppointment);
router.get('/', authenticateToken, listAppointments);
router.patch('/:id/status', authenticateToken, changeStatus);

module.exports = router;