const express = require('express');
const router = express.Router();
const {authMiddleware, roleCheck} = require('../middlewares/authMiddleware.js');
const upload = require('../middlewares/uploadMiddleware.js');
const {userDetails,
    userIdentityDetails,
    userQualificationDetails,
    apply } = require('../controllers/userController.js');
const {getJobsByDesignation} = require('../controllers/jobController.js');

    const uploadFields = upload.fields([
        { name: 'idProof', maxCount: 1 },
        { name: 'signature', maxCount: 1 },
        { name: 'image', maxCount: 1 }
        ]);

router.post('/personal-details', authMiddleware, roleCheck("user"), userDetails);
router.post('/identity-details', authMiddleware, roleCheck("user"), uploadFields,userIdentityDetails);
router.post('/qualification-details', authMiddleware, roleCheck("user"), userQualificationDetails);
router.post('/apply', authMiddleware, roleCheck("user"), apply);
router.get('/related-jobs', authMiddleware, roleCheck("user"), getJobsByDesignation);


module.exports = router;


//getting unathorised access check for rolecheck and sync true and debug