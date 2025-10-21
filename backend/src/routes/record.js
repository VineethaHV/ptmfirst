const express = require('express');
const router = express.Router();
const { addRecord, listRecords } = require('../controllers/recordController');
const { authenticateToken } = require('../middleware/auth');

router.post('/', authenticateToken, addRecord);
router.get('/:patient_id', authenticateToken, listRecords);

module.exports = router;