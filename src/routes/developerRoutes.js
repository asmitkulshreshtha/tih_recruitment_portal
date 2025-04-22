const express = require('express');
const router = express.Router();
const {
    getAllLogs,
    getLogByAdmin
} = require('../controllers/auditController.js');
const { authMiddleware , roleCheck} = require('../middlewares/authMiddleware');

router.get('/get-logs', authMiddleware, roleCheck('developer'), getAllLogs);
router.get('/get-logs/:id', authMiddleware, roleCheck('developer'), getLogByAdmin);

module.exports = router;