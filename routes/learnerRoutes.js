// routes/learnerRoutes.js
const express = require('express');
const router = express.Router();
const learnerController = require('../controllers/learnerController');

// Enroll a learner in a workshop
router.post('/:learnerId/enroll/:workshopId', learnerController.enrollLearner);

// Get workshops a learner is enrolled in
router.get('/:learnerId/workshops', learnerController.getEnrolledWorkshops);

module.exports = router;
