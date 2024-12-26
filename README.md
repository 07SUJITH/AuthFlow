# AuthFlow

Authentication system featuring email verification, password recovery, and welcome emails for a secure and user-friendly experience.

## Cloning the Repository

To get a copy of this project up and running on your local machine, follow these steps:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/07SUJITH/AuthFlow.git
   ```
2. **Navigate to the project directory**:
   ```sh
   cd AuthFlow
   ```
3. **Install dependencies**:
   ```sh
   npm install
   ```
4. **Set up environment variables**:
   Follow the instructions in the [Environment Setup](#environment-setup) section to create and configure your `.env` file.

5. **Run the application**:
   ```sh
   npm start
   ```

Your application should now be running on `http://localhost:5000`.

## Environment Setup

To run this project, you will need to add the following environment variables to your `.env` file in the root directory of the project.

### Example `.env` file

```properties
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.skofr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
PORT=5000
JWT_SECRET=your_jwt_secret
NODE_ENV=development
MAILTRAP_API_TOKEN=your_mailtrap_api_token
CLIENT_URL=http://localhost:5173
```

### Environment Variables Description

- **MONGO_URI**: The connection string for your MongoDB database. Replace `<username>` and `<password>` with your MongoDB credentials.
- **PORT**: The port number on which your server will run. Default is `5000`.
- **JWT_SECRET**: A secret key for signing JSON Web Tokens (JWT). Replace `your_jwt_secret` with a strong secret key.
- **NODE_ENV**: The environment in which the application is running. Typically `development` or `production`.
- **MAILTRAP_API_TOKEN**: Your Mailtrap API token for sending emails. Replace `your_mailtrap_api_token` with your actual Mailtrap API token.
- **CLIENT_URL**: The URL of your frontend application. Default is `http://localhost:5173`.

## Steps to Set Up

1. Create a `.env` file in the root directory of your project.
2. Copy the example content above into your `.env` file.
3. Replace the placeholder values with your actual credentials and configuration.
