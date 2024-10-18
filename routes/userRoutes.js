// routes/userRoutes.js
const express = require('express');
const UserController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

const router = express.Router();

// Accessible only by authenticated users with 'admin' role
router.post('/', authMiddleware, roleMiddleware(['canCreateUser']), UserController.createUser);
router.get('/', authMiddleware, roleMiddleware(['canEditUsers', 'canDeleteUsers']), UserController.getUsers);
router.get('/:id', authMiddleware, UserController.getUserById);
router.put('/:id', authMiddleware, roleMiddleware(['canEditUsers']), UserController.updateUser);
router.delete('/:id', authMiddleware, roleMiddleware(['canDeleteUsers']), UserController.deleteUser);

module.exports = router;
