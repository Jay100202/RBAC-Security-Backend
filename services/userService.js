const User = require('../models/User');
const Role = require('../models/Role');

exports.getUserById = async (userId) => {
    const user = await User.findById(userId).populate('roles');
    if (!user) {
        throw new Error('User not found');
    }
    return user;
};

exports.updateUser = async (userId, updateData) => {
    const user = await User.findByIdAndUpdate(userId, updateData, { new: true });
    if (!user) {
        throw new Error('User not found');
    }
    return user;
};

exports.assignRole = async (userId, roleId) => {
    const user = await User.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }

    const role = await Role.findById(roleId);
    if (!role) {
        throw new Error('Role not found');
    }

    user.roles.push(role);
    await user.save();
    return user;
};