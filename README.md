# AuthFlow

A comprehensive MERN-based authentication system featuring email verification, password recovery, and welcome emails for a secure and user-friendly experience.

## Installation

```bash
npm i express cookie-parser mailtrap bcryptjs dotenv jsonwebtoken mongoose crypto nodemon
```

## Dependencies

- **express**: Web application framework
- **cookie-parser**: Parse Cookie header and populate req.cookies
- **mailtrap**: Email delivery platform for testing
- **bcryptjs**: Password hashing utility
- **dotenv**: Environment variables management
- **jsonwebtoken**: JWT implementation for authentication
- **mongoose**: MongoDB object modeling tool
- **crypto**: Built-in Node.js crypto module for cryptographic operations
- **nodemon**: Tool for automatically restarting Node.js applications during development

## Environment Setup

1. Create a `.env` file in the root directory:

```env
MONGODB_URI=mongodb+srv://username:<db_password>@cluster0.skofr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```

## MongoDB Deployment

The project uses MongoDB Atlas for database hosting:

- Cluster: Cluster0
- Database Type: Free Tier
- Connection Method: MongoDB URI
- Authentication: Username and Password
