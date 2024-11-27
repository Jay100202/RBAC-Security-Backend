const express = require('express');
const roleController = require('../controllers/roleController');
const authMiddleware = require('../middlewares/authmiddlewares');
const roleMiddleware = require('../middlewares/roleMiddleware');
const router = express.Router();

router.post('/auth/createRole', authMiddleware.verifyToken, roleMiddleware.isAdmin, roleController.createRole);
router.get('/auth/getRole', authMiddleware.verifyToken, roleMiddleware.isAdmin, roleController.getRoles);
router.put('/auth/updateRole/:id', authMiddleware.verifyToken, roleMiddleware.isAdmin, roleController.updateRole);
router.delete('/auth/deleteRole/:id', authMiddleware.verifyToken, roleMiddleware.isAdmin, roleController.deleteRole);

module.exports = router;