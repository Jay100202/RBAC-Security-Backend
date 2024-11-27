const express = require('express');
const userController = require('../controllers/usercontroller');
const authMiddleware = require('../middlewares/authmiddlewares');
const roleMiddleware = require('../middlewares/roleMiddleware');
const router = express.Router();

router.get('/auth/getUser/:id', authMiddleware.verifyToken, userController.getUser);
router.put('/auth/updateUser:id', authMiddleware.verifyToken, userController.updateUser);
router.post('/auth/:id/assign-role', authMiddleware.verifyToken, roleMiddleware.isAdmin, userController.assignRole);

module.exports = router;