const User = require('../models/User');
const jwtUtil = require('../utils/jwtutils');
const bcrypt = require('bcryptjs');

exports.register = async (userData) => {
    const { name, email, password } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    return user;
};

exports.login = async (loginData) => {
    const { email, password } = loginData;
    const user = await User.findOne({ email });
    if (!user) {    
        throw new Error('User not found');
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) { 
        throw new Error('Invalid credentials');
    }
   
    const token = jwtUtil.generateToken({ id: user._id, email: user.email });  
    return token;
};