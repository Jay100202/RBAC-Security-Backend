const Role = require('../models/Role');

exports.createRole = async (roleData) => {
    const role = new Role(roleData);
    await role.save();
    return role;
};

exports.getRoles = async () => {
    const roles = await Role.find();
    return roles;
};

exports.updateRole = async (roleId, updateData) => {
    const role = await Role.findByIdAndUpdate(roleId, updateData, { new: true });
    if (!role) {
        throw new Error('Role not found');
    }
    return role;
};

exports.deleteRole = async (roleId) => {
    const role = await Role.findByIdAndDelete(roleId);
    if (!role) {
        throw new Error('Role not found');
    }
};