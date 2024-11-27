const User = require('../models/User');
const jwtUtil = require('../utils/jwtutils');
const bcrypt = require('bcryptjs');

exports.register = async (userData) => {
    const { name, email, password } = userData;
    console.log('Registering user:', email);
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    console.log('User registered successfully:', email);
    return user;
};

exports.login = async (loginData) => {
    const { email, password } = loginData;
    console.log('Attempting login for:', email);
    const user = await User.findOne({ email });
    if (!user) {
        console.error('User not found:', email);
        throw new Error('User not found');
    }
    console.log('User found:', email);
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        console.error('Invalid credentials for:', email);
        throw new Error('Invalid credentials');
    }
    console.log('Password match for:', email);
    const token = jwtUtil.generateToken({ id: user._id, email: user.email });
    console.log('Token generated for:', email);
    return token;
};