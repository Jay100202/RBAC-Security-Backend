const express = require('express');
const permissionController = require('../controllers/permissionController');
const authMiddleware = require('../middlewares/authmiddlewares');
const roleMiddleware = require('../middlewares/roleMiddleware');
const router = express.Router();

router.post('/auth/createPermission', authMiddleware.verifyToken, permissionController.createPermission);
router.get('/auth/getPermission', authMiddleware.verifyToken, permissionController.getPermissions);
router.put('/auth/updatePermission/:id', authMiddleware.verifyToken, permissionController.updatePermission);
router.delete('/auth/deletePermission/:id', authMiddleware.verifyToken, permissionController.deletePermission);

module.exports = router;