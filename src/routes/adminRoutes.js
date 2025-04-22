const express = require('express');
const router = express.Router();
const {authMiddleware, roleCheck} = require('../middlewares/authMiddleware.js');
const adminAuditMiddleware = require('../middlewares/adminAuditMiddleware.js')
const {createJob,
    getUserDetailsById,
    getApplications,
    approveApplication,
    rejectApplication} = require('../controllers/adminController.js');

router.post('/post-jobs', authMiddleware, roleCheck(['admin', 'developer']),adminAuditMiddleware, createJob);
router.get('/get-userdetails/:id',authMiddleware, roleCheck(['admin', 'developer']),adminAuditMiddleware,getUserDetailsById);
router.get('/get-applications',authMiddleware, roleCheck(['admin', 'developer']),adminAuditMiddleware,getApplications);
router.put('/approve-application/:id', authMiddleware, roleCheck(['admin', 'developer']), adminAuditMiddleware,approveApplication);
router.put('/reject-application/:id', authMiddleware, roleCheck(['admin', 'developer']),adminAuditMiddleware, rejectApplication);

module.exports = router;