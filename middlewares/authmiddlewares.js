const jwtUtil = require('../utils/jwtutils');
const responseUtil = require('../utils/responseutil');

exports.verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return responseUtil.error(res, 'No token provided', 403);
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
        return responseUtil.error(res, 'Token not found in header', 403);
    }
    try {
        const decoded = jwtUtil.verifyToken(token);
        req.user = decoded;
        next();
    } catch (error) {
        console.error('Failed to authenticate token:', error.message);
        responseUtil.error(res, 'Failed to authenticate token', 500);
    }
};