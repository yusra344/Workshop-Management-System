# Workshop-Management-System

This is a Workshop Management System. It includes features for real-time enrollment management, notifications, and third-party integrations with Google Calendar and Google Maps.

## Features
- Workshop Management
- Learner Participation
- Real-Time Notifications
- Google Calendar Integration
- Google Maps Integration

## Technologies Used
- Node.js
- Express.js
- MySQL
- Firebase
- Google APIs
  
##  System Architecture
The system will use the following components:

Backend Framework: Node.js 

# Database:
- MySQL for structured data (workshops, activities, enrollments).
- Firebase for real-time notifications and push notifications.
# Third-Party Integrations:
- Google Calendar API for scheduling and tracking.
- Real-Time Notifications: Firebase Cloud Messaging (FCM) for real-time updates to mentors and learners.

## API Documentation
[Postman Collection](#)

## Folder Structure

workshop-management-system/
│
├── app.js                  # Main application file
├── routes/                 # API routes
│   ├── workshopRoutes.js   # Workshop-related routes
│   ├── learnerRoutes.js    # Learner-related routes
│   └── activityRoutes.js   # Activity-related routes
├── controllers/            # Business logic
│   ├── workshopController.js
│   ├── learnerController.js
│   └── activityController.js
├── models/                 # Database models
│   ├── workshopModel.js
│   ├── learnerModel.js
│   └── activityModel.js
├── config/                 # Configuration files
│   └── db.js               # Database connection
└── README.md               # Project documentation

