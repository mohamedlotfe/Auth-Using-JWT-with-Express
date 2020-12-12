const router = require('express').Router();
const { verifyUserToken, IsAdmin, IsUser } = require("../middleware/auth");
const userController = require('../controllers/user');

// Register a new User
router.post('/register', userController.register);

// Login
router.post('/login', userController.login);

// Auth user only
router.get('/events', verifyUserToken, IsUser, userController.userEvent);

// Auth Admin only
router.get('/special', verifyUserToken, IsAdmin, userController.adminEvent);

module.exports = router;