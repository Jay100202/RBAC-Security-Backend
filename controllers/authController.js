const authService = require('../services/authService');
const responseUtil = require('../utils/responseutil');

exports.register = async (req, res) => {
    try {
        const user = await authService.register(req.body);
        responseUtil.success(res, user, 'User registered successfully');
    } catch (error) {
        responseUtil.error(res, error.message);
    }
};

exports.login = async (req, res) => {
    try {
        const token = await authService.login(req.body);
        responseUtil.success(res, { token }, 'User logged in successfully');
    } catch (error) {
        responseUtil.error(res, error.message);
    }
};
