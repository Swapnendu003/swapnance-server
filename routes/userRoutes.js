const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to add or update a user
router.post('/add', userController.addOrUpdateUser);

// Route to get user details
router.get('/:userId', userController.getUser);

module.exports = router;
