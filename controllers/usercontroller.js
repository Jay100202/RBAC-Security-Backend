const userService = require('../services/userService');
const responseUtil = require('../utils/responseutil');

exports.getUser = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        responseUtil.success(res, user, 'User fetched successfully');
    } catch (error) {
        responseUtil.error(res, error.message);
    }
};

exports.updateUser = async (req, res) => {
    try {
        const user = await userService.updateUser(req.params.id, req.body);
        responseUtil.success(res, user, 'User updated successfully');
    } catch (error) {
        responseUtil.error(res, error.message);
    }
};

exports.assignRole = async (req, res) => {
    try {
        const user = await userService.assignRole(req.params.id, req.body.roleId);
        responseUtil.success(res, user, 'Role assigned successfully');
    } catch (error) {
        responseUtil.error(res, error.message);
    }
};