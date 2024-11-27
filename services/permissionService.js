const Permission = require('../models/permission');

exports.createPermission = async (permissionData) => {
    const permission = new Permission(permissionData);
    await permission.save();
    return permission;
};

exports.getPermissions = async () => {
    return await Permission.find();
};

exports.updatePermission = async (permissionId, updateData) => {
    const permission = await Permission.findByIdAndUpdate(permissionId, updateData, { new: true });
    if (!permission) {
        throw new Error('Permission not found');
    }
    return permission;
};

exports.deletePermission = async (permissionId) => {
    const permission = await Permission.findByIdAndDelete(permissionId);
    if (!permission) {
        throw new Error('Permission not found');
    }
};