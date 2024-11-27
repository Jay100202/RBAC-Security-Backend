const jwtUtil = require('../utils/jwtutils');
const responseUtil = require('../utils/responseutil');

exports.verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    console.log('Authorization Header:', authHeader);

    if (!authHeader) {
        console.error('No token provided');
        return responseUtil.error(res, 'No token provided', 403);
    }

    const token = authHeader.split(' ')[1];
    console.log('Extracted Token:', token);

    if (!token) {
        console.error('Token not found in header');
        return responseUtil.error(res, 'Token not found in header', 403);
    }

    try {
        const decoded = jwtUtil.verifyToken(token);
        console.log('Decoded Token:', decoded);
        req.user = decoded;
        next();
    } catch (error) {
        console.error('Failed to authenticate token:', error.message);
        responseUtil.error(res, 'Failed to authenticate token', 500);
    }
};