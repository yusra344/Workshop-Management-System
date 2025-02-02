// controllers/learnerController.js
const db = require('../config/db');

// Enroll a learner in a workshop
exports.enrollLearner = async (req, res) => {
    try {
        const { learnerId, workshopId } = req.params;
        
        // Check if learner exists
        const [learner] = await db.execute('SELECT * FROM learners WHERE id = ?', [learnerId]);
        if (learner.length === 0) return res.status(404).json({ message: 'Learner not found' });
        
        // Check if already enrolled
        const [enrollment] = await db.execute('SELECT * FROM enrollments WHERE learner_id = ? AND workshop_id = ?', [learnerId, workshopId]);
        if (enrollment.length > 0) return res.status(400).json({ message: 'Learner already enrolled' });
        
        // Enroll learner
        await db.execute('INSERT INTO enrollments (learner_id, workshop_id) VALUES (?, ?)', [learnerId, workshopId]);
        res.json({ message: 'Learner enrolled successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get workshops a learner is enrolled in
exports.getEnrolledWorkshops = async (req, res) => {
    try {
        const { learnerId } = req.params;
        
        const [workshops] = await db.execute(
            'SELECT workshops.* FROM workshops JOIN enrollments ON workshops.id = enrollments.workshop_id WHERE enrollments.learner_id = ?',
            [learnerId]
        );
        
        if (workshops.length === 0) return res.status(404).json({ message: 'No enrolled workshops found' });
        res.json(workshops);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
