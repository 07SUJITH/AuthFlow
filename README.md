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

## Limitations

### Email Service

Currently, this system uses Mailtrap for sending emails. There are some limitations to be aware of:

1. **Mailtrap Domain**: We are using the default Mailtrap domain for sending emails. This means that emails will only be delivered to the email address associated with the Mailtrap API token set in the environment variable `MAILTRAP_API_TOKEN`.
2. **Internal Server Error**: If you attempt to send an email to an address that is not associated with the Mailtrap API token, the system will generate an internal server error.

### How to Resolve Email Limitations

To send emails to all email addresses, you have two options:

1. **Buy a Domain and Set Up in Mailtrap**:

   - Purchase a domain from a domain registrar.
   - Set up the domain in Mailtrap by following their [domain setup guide](https://help.mailtrap.io/article/44-custom-smtp-domains).
   - Update the environment variable `MAILTRAP_API_TOKEN` with the appropriate API token for your domain.

2. **Choose Other Email Services**:
   - You can choose other email services like SendGrid, Amazon SES, or Mailgun.
   - Set up an account with the chosen email service.
   - Update your email sending logic and environment variables to use the new service.

### Example for Using SendGrid

If you choose to use SendGrid, you can follow these steps:

1. **Sign Up for SendGrid**: Create an account on [SendGrid](https://sendgrid.com/).
2. **Create an API Key**: Generate an API key in the SendGrid dashboard.
3. **Update Environment Variables**: Add the following environment variables to your `.env` file:
   ```properties
   SENDGRID_API_KEY=your_sendgrid_api_key
   ```
4. Update Email Sending Logic: Modify your email sending logic to use SendGrid. Here is an example

   ```javascript
   import sgMail from "@sendgrid/mail";

   sgMail.setApiKey(process.env.SENDGRID_API_KEY);

   const sendEmail = async (to, subject, htmlContent) => {
     const msg = {
       to,
       from: "your_verified_email@example.com", // Use the email address you verified with SendGrid
       subject,
       html: htmlContent,
     };
     await sgMail.send(msg);
   };
   ```
