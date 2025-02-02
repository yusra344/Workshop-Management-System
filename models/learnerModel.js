const db = require('../config/db');

// Enroll learner in a workshop
const enrollLearner = (workshopId, learnerId, callback) => {
  const query = 'INSERT INTO Enrollments (workshopId, learnerId) VALUES (?, ?)';
  db.query(query, [workshopId, learnerId], callback);
};

// Get enrolled workshops for a learner
const getEnrolledWorkshops = (learnerId, callback) => {
  const query = `
    SELECT Workshops.*, Activities.* 
    FROM Enrollments 
    JOIN Workshops ON Enrollments.workshopId = Workshops.workshopId 
    JOIN Activities ON Workshops.workshopId = Activities.workshopId 
    WHERE Enrollments.learnerId = ?
  `;
  db.query(query, [learnerId], callback);
};

module.exports = {
  enrollLearner,
  getEnrolledWorkshops,
};
