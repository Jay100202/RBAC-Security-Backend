# VRV Security RBAC System

## Overview
This project implements an Authentication and Authorization system with Role-Based Access Control (RBAC) for VRV Security's Backend Developer Intern Assignment.

## Features
- User registration, login, and logout
- Role management (Admin, User)
- Secure authentication with JWT
- Role-based access control
- Security best practices (password hashing, rate limiting, helmet, sanitization)
- Permission management

## Setup Instructions
1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory with the following variables:
    ```
    PORT=3000
    MONGODB_URI=<your-mongodb-uri>
    JWT_SECRET=<your-jwt-secret>
    ```

4. Start the server:
    ```bash
    npm run dev
    ```

## API Endpoints

### Auth Routes
- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: Login a user
- `POST /api/auth/logout`: Logout a user

### User Routes
- `GET /api/auth/getUser/:id`: Get user details
- `PUT /api/auth/updateUser/:id`: Update user details
- `POST /api/auth/:id/assign-role`: Assign a role to a user

### Role Routes
- `POST /api/auth/createRole`: Create a new role
- `GET /api/auth/getRole`: Get all roles
- `PUT /api/auth/updateRole/:id`: Update a role
- `DELETE /api/auth/deleteRole/:id`: Delete a role

### Permission Routes
- `POST /api/auth/createPermission`: Create a new permission
- `GET /api/auth/getPermission`: Get all permissions
- `PUT /api/auth/updatePermission/:id`: Update a permission
- `DELETE /api/auth/deletePermission/:id`: Delete a permission

## Security Measures
- **Password Hashing**: Passwords are hashed using bcrypt before storing in the database.
- **JWT**: JSON Web Tokens are used for secure session management.
- **Rate Limiting**: Limits the number of requests from a single IP to prevent abuse.
- **Helmet**: Sets various HTTP headers for security.
- **XSS Protection**: Protects against cross-site scripting attacks.
- **MongoDB Injection Sanitization**: Sanitizes user input to prevent MongoDB injection attacks.
- **HTTP Parameter Pollution Protection**: Prevents HTTP Parameter Pollution attacks.
- **DDoS Protection**: Rate limiting and request slowing to mitigate DDoS attacks.

## Testing
Ensure all routes and functionalities are tested thoroughly. Consider adding unit tests for critical parts of the application.

## Submission
Push your code to a GitHub repository. Include this README.md file with setup and usage instructions. Submit the repository link as per the submission guidelines.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any questions or issues, please contact [jaymandaliya250@gmail.com].