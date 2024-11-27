const permissionService = require('../services/permissionService');
const responseUtil = require('../utils/responseutil');

exports.createPermission = async (req, res) => {
    try {
        const permission = await permissionService.createPermission(req.body);
        responseUtil.success(res, permission, 'Permission created successfully');
    } catch (error) {
        responseUtil.error(res, error.message);
    }
};

exports.getPermissions = async (req, res) => {
    try {
        const permissions = await permissionService.getPermissions();
        responseUtil.success(res, permissions, 'Permissions fetched successfully');
    } catch (error) {
        responseUtil.error(res, error.message);
    }
};

exports.updatePermission = async (req, res) => {
    try {
        const permission = await permissionService.updatePermission(req.params.id, req.body);
        responseUtil.success(res, permission, 'Permission updated successfully');
    } catch (error) {
        responseUtil.error(res, error.message);
    }
};

exports.deletePermission = async (req, res) => {
    try {
        await permissionService.deletePermission(req.params.id);
        responseUtil.success(res, null, 'Permission deleted successfully');
    } catch (error) {
        responseUtil.error(res, error.message);
    }
};