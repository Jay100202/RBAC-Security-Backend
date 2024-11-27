const roleService = require('../services/roleService');
const responseUtil = require('../utils/responseutil');

exports.createRole = async (req, res) => {
    try {
        const role = await roleService.createRole(req.body);
        responseUtil.success(res, role, 'Role created successfully');
    } catch (error) {
        responseUtil.error(res, error.message);
    }
};

exports.getRoles = async (req, res) => {
    try {
        const roles = await roleService.getRoles();
        responseUtil.success(res, roles, 'Roles fetched successfully');
    } catch (error) {
        responseUtil.error(res, error.message);
    }
};

exports.updateRole = async (req, res) => {
    try {
        const role = await roleService.updateRole(req.params.id, req.body);
        responseUtil.success(res, role, 'Role updated successfully');
    } catch (error) {
        responseUtil.error(res, error.message);
    }
};

exports.deleteRole = async (req, res) => {
    try {
        await roleService.deleteRole(req.params.id);
        responseUtil.success(res, null, 'Role deleted successfully');
    } catch (error) {
        responseUtil.error(res, error.message);
    }
};