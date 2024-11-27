const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoute');
const userRoutes = require('./routes/userRoutes');
const roleRoutes = require('./routes/roleRoutes');
const permissionRoutes = require('./routes/permissionRoutes');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const expressRateLimit = require('express-rate-limit');
const slowDown = require('express-slow-down');

dotenv.config();


const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(hpp()); // Prevent HTTP Parameter Pollution

// Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);

// Slow down requests after a certain limit to mitigate DDoS attacks
const speedLimiter = slowDown({
  windowMs: 15 * 60 * 1000, // 15 minutes
  delayAfter: 100, // allow 100 requests per 15 minutes, then...
  delayMs: 500 // begin adding 500ms of delay per request above 100
});
app.use(speedLimiter);

// Routes
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', roleRoutes);
app.use('/api', permissionRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));