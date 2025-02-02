// routes/activityRoutes.js
const express = require('express');
const router = express.Router();
const activityController = require('../controllers/activityController');

// Get all activities for a specific workshop
router.get('/:workshopId', activityController.getActivitiesByWorkshop);

// Get a specific activity by ID
router.get('/:workshopId/:activityId', activityController.getActivityById);

module.exports = router;
