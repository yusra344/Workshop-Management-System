const express = require('express');
const db = require('./config/db');
const workshopRoutes = require('./routes/workshopRoutes');
const learnerRoutes = require('./routes/learnerRoutes');
const activityRoutes = require('./routes/activityRoutes');

const app = express();
app.use(express.json());

// Database connection
db.connect((err) => {
  if (err) throw err;
  console.log('MySQL Connected');
});

// Routes
app.use('/api/workshops', workshopRoutes);
app.use('/api/learners', learnerRoutes);
app.use('/api/activities', activityRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});