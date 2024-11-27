const User = require('../models/User');
const responseUtil = require('../utils/responseutil');

exports.isAdmin = async (req, res, next) => {
    const user = await User.findById(req.user.id).populate('roles');
    if (!user) {
        return responseUtil.error(res, 'User not found', 404);
    }
    const isAdmin = user.roles.some(role => role.name === 'admin');
    if (!isAdmin) {
        return responseUtil.error(res, 'Access denied', 403);
    }
    next();
};