# Authentication API Documentation

## Overview

This API provides comprehensive authentication and user management functionalities for web and mobile applications. It offers features such as user registration, login, email verification, password reset, and authentication status checks.

### Key Features

- User registration and account creation
- User authentication and login
- Email verification for new accounts
- Password reset functionality
- Authentication status checks

### Target Audience

Developers integrating user authentication and management into web applications or mobile apps.

## Getting Started

### Authentication

This API uses JSON Web Tokens (JWT) for authentication. Upon successful login, a token is set in an HTTP-only cookie.

### Base URL

```
- Production: https://api.example.com
- Development: http://localhost:5000
```

## API Endpoints

### User Management

#### Register a New User

- **POST** `/api/auth/signup`
- **Description**: Create a new user account
- **Request Body**:

```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

**Response** (201 Created):

```json
{
  "success": true,
  "message": "User created successfully and verification email sent",
  "user": {
    "username": "string",
    "email": "string",
    "isVerified": false,
    "_id": "string",
    "createdAt": "string",
    "updatedAt": "string"
  }
}
```

- **Errors**:

- 400 Bad Request: Missing fields or user already exists
- 500 Internal Server Error: Server error

**Example**:

```shellscript
curl -X POST https://api.example.com/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"username": "johndoe", "email": "john@example.com", "password": "securepass123"}'
```

#### Verify Email

- **POST** `/api/auth/verify-email`
- **Description**: Verify a user's email address
- **Request Body**:

```json
{
  "code": "string"
}
```

- **Response** (200 OK):

```json
{
  "success": true,
  "message": "Email verified successfully",
  "user": {
    "username": "string",
    "email": "string",
    "isVerified": true,
    "_id": "string",
    "createdAt": "string",
    "updatedAt": "string"
  }
}
```

- **Errors**:

- 400 Bad Request: Invalid or expired verification code
- 500 Internal Server Error: Server error

**Example**:

```shellscript
curl -X POST https://api.example.com/api/auth/verify-email \
  -H "Content-Type: application/json" \
  -d '{"code": "123456"}'
```

### Authentication

#### User Login

- **POST** `/api/auth/login`
- **Description**: Authenticate a user and receive a token
- **Request Body**:

```json
{
  "email": "string",
  "password": "string"
}
```

- **Response** (200 OK):

```json
{
  "success": true,
  "message": "Logged in successfully",
  "user": {
    "username": "string",
    "email": "string",
    "isVerified": true,
    "_id": "string",
    "createdAt": "string",
    "updatedAt": "string",
    "lastLogin": "string"
  }
}
```

- **Cookie**:

- Name: `token`
- Value: JWT token
- HttpOnly: true
- Secure: true (in production)
- SameSite: Strict
- MaxAge: 7 days

- **Errors**:

- 400 Bad Request: Invalid credentials
- 500 Internal Server Error: Server error

**Example**:

```shellscript
curl -X POST https://api.example.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "john@example.com", "password": "securepass123"}'
```

#### User Logout

- **POST** `/api/auth/logout`
- **Description**: Log out the current user
- **Response** (200 OK):

```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

- **Cookie**: Clears the `token` cookie

**Example**:

```shellscript
curl -X POST https://api.example.com/api/auth/logout \
  -H "Cookie: token=<your-token-here>"
```

#### Check Authentication Status

- **GET** `/api/auth/check-auth`
- **Description**: Check if the current user is authenticated
- **Headers**:

- Authorization: Bearer `<token>`

- **Cookie**: Reads the `token` cookie
- **Response** (200 OK):

```json
{
  "success": true,
  "message": "User authenticated successfully",
  "user": {
    "username": "string",
    "email": "string",
    "isVerified": true,
    "_id": "string",
    "createdAt": "string",
    "updatedAt": "string",
    "lastLogin": "string"
  }
}
```

- **Errors**:

- 401 Unauthorized: No token provided or invalid token
- 400 Bad Request: User not found
- 500 Internal Server Error: Server error

**Example**:

```shellscript
curl -X GET https://api.example.com/api/auth/check-auth \
  -H "Cookie: token=<your-token-here>" \
  -H "Authorization: Bearer <your-token-here>"
```

### Password Management

#### Forgot Password

- **POST** `/api/auth/forgot-password`
- **Description**: Request a password reset link
- **Request Body**:

```json
{
  "email": "string"
}
```

- **Response** (200 OK):

```json
{
  "success": true,
  "message": "Password reset link email sent"
}
```

- **Errors**:

- 400 Bad Request: User not found
- 500 Internal Server Error: Server error

**Example**:

```shellscript
curl -X POST https://api.example.com/api/auth/forgot-password \
  -H "Content-Type: application/json" \
  -d '{"email": "john@example.com"}'
```

#### Reset Password

- **POST** `/api/auth/reset-password/:token`
- **Description**: Reset user's password using a valid token
- **Parameters**:

- Path: `token` (string)

- **Request Body**:

```json
{
  "password": "string"
}
```

- **Response** (200 OK):

```json
{
  "success": true,
  "message": "Password reset successfully"
}
```

- **Errors**:

- 400 Bad Request: Invalid or expired token
- 500 Internal Server Error: Server error

**Example**:

```shellscript
curl -X POST https://api.example.com/api/auth/reset-password/abcdef123456 \
  -H "Content-Type: application/json" \
  -d '{"password": "newSecurePass456"}'
```
