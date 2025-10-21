const express = require('express');
const router = express.Router();
const { registerPatient, listPatients, getPatient } = require('../controllers/patientController');
const { authenticateToken } = require('../middleware/auth');

router.post('/', authenticateToken, registerPatient);
router.get('/', authenticateToken, listPatients);
router.get('/:id', authenticateToken, getPatient);

module.exports = router;