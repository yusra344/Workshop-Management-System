const express = require('express');
const router = express.Router();
const workshopController = require('../controllers/workshopController');

// Create a new workshop (Mentor-only access)
router.post('/', workshopController.createWorkshop);

// Add multiple activities to a workshop
router.post('/:workshopId/activities', workshopController.addActivities);

// Update an activity in a workshop
router.put('/:workshopId/activities/:activityId', workshopController.updateActivity);

// Delete an activity from a workshop
router.delete('/:workshopId/activities/:activityId', workshopController.deleteActivity);

// Enroll a learner in a workshop
router.post('/:workshopId/enroll', workshopController.enrollLearner);

// Get workshops a learner is enrolled in
router.get('/learners/:learnerId', workshopController.getEnrolledWorkshops);

module.exports = router;
