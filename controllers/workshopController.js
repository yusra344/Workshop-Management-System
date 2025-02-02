// controllers/workshopController.js
const Workshop = require('../models/workshopModel');
const Learner = require('../models/learnerModel');
const Activity = require('../models/activityModel');

// Create a new workshop
exports.createWorkshop = async (req, res) => {
    try {
        const workshop = new Workshop(req.body);
        await workshop.save();
        res.status(201).json(workshop);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add multiple activities to a workshop
exports.addActivities = async (req, res) => {
    try {
        const { workshopId } = req.params;
        const activities = req.body.activities;
        
        const createdActivities = await Activity.insertMany(
            activities.map(activity => ({ ...activity, workshop: workshopId }))
        );

        res.status(201).json(createdActivities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an activity in a workshop
exports.updateActivity = async (req, res) => {
    try {
        const { activityId } = req.params;
        const updatedActivity = await Activity.findByIdAndUpdate(activityId, req.body, { new: true });
        res.json(updatedActivity);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete an activity from a workshop
exports.deleteActivity = async (req, res) => {
    try {
        const { activityId } = req.params;
        await Activity.findByIdAndDelete(activityId);
        res.json({ message: 'Activity deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Enroll a learner in a workshop
exports.enrollLearner = async (req, res) => {
    try {
        const { workshopId, learnerId } = req.params;
        const learner = await Learner.findById(learnerId);
        if (!learner) return res.status(404).json({ message: 'Learner not found' });
        
        learner.registeredWorkshops.push(workshopId);
        await learner.save();
        res.json({ message: 'Learner enrolled successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get workshops a learner is enrolled in
exports.getEnrolledWorkshops = async (req, res) => {
    try {
        const { learnerId } = req.params;
        const learner = await Learner.findById(learnerId).populate('registeredWorkshops');
        if (!learner) return res.status(404).json({ message: 'Learner not found' });
        
        res.json(learner.registeredWorkshops);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
