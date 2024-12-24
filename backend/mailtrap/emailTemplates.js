export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to GradSpace</title>
    <link href="https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap" rel="stylesheet">

</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style=" padding: 20px; text-align: center;  font-family: 'Philosopher', sans-serif; ">
    
    <h1 style=" margin: 0;">Welcome to 
    <span
  style="
    display: inline-block;
    padding: 0 1rem;
    transform: skewY(-2deg);
    background-color: #e6e6ff; /* violet-200 */
    color: #5c2d91; /* violet-800 */
    font-weight: bold;
    font-family: 'Philosopher', sans-serif;
  
  "
>
  <span style="transform: skewY(2deg); display: inline-block;">
    GradSpace
  </span>
</span>
    
    </h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello {userName},</p>
    <p>Welcome to GradSpace! We're thrilled to have you join our community of graduate students and researchers.</p>
    <div style="text-align: center; margin: 30px 0;">
      <img src="https://images.pexels.com/photos/1553150/pexels-photo-1553150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Welcome to GradSpace" style="max-width: 100%; border-radius: 5px;">
    </div>
    <p>Here's what you can do with GradSpace:</p>
    <ul>
     <li>Connect with fellow students and alumni across various fields</li>
    <li>Share and discover internship and research opportunities</li>
    <li>Access resources tailored for both students and alumni</li>
    <li>Participate in discussions, forums, and mentorship programs</li>
    <li>Receive job recommendations, referrals, and career guidance</li>
    <li>Showcase your achievements, projects, and career milestones</li>
    <li>Engage in real-time one-to-one chats </li>
    </ul>
    <p>To get started, simply log in to your account and complete your profile. If you have any questions, our support team is always here to help.</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="https://gradspace-beta.netlify.app/login" style="background-color:#5c2d91; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;  font-family: 'Philosopher', sans-serif;">Log In to GradSpace</a>
    </div>
    <p>We're excited to see what you'll achieve with GradSpace!</p>
    <p>Best regards,<br>The GradSpace Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message. Please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
  <link href="https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap" rel="stylesheet">
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="padding: 20px; text-align: center; font-family: 'Philosopher', sans-serif;">
    <h1 style="margin: 0;">Verify Your 
      <span style="display: inline-block; padding: 0 1rem; transform: skewY(-2deg); background-color: #e6e6ff; color: #5c2d91; font-weight: bold; font-family: 'Philosopher', sans-serif;">
        <span style="transform: skewY(2deg); display: inline-block;">
          GradSpace
        </span>
      </span>
      Email
    </h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>Thank you for signing up! Your verification code is:</p>
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #5c2d91; font-family: 'Philosopher', sans-serif;">{verificationCode}</span>
    </div>
    <p>Enter this code on the verification page to complete your registration.</p>
    <p>This code will expire in 15 minutes for security reasons.</p>
    <p>If you didn't create an account with us, please ignore this email.</p>
    <p>Best regards,<br>The GradSpace Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message. Please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
  <link href="https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap" rel="stylesheet">
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="padding: 20px; text-align: center; font-family: 'Philosopher', sans-serif;">
    <h1 style="margin: 0;">
      <span style="display: inline-block; padding: 0 1rem; transform: skewY(-2deg); background-color: #e6e6ff; color: #5c2d91; font-weight: bold; font-family: 'Philosopher', sans-serif;">
        <span style="transform: skewY(2deg); display: inline-block;">
          GradSpace
        </span>
      </span>
      Password Reset Successful
    </h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We're writing to confirm that your password has been successfully reset.</p>
    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: #5c2d91; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px; font-family: 'Philosopher', sans-serif;">
        ✓
      </div>
    </div>
    <p>If you did not initiate this password reset, please contact our support team immediately.</p>
    <p>For security reasons, we recommend that you:</p>
    <ul>
      <li>Use a strong, unique password</li>
      <li>Avoid using the same password across multiple sites</li>
    </ul>
    <p>Thank you for helping us keep your account secure.</p>
    <p>Best regards,<br>The GradSpace Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message. Please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
  <link href="https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap" rel="stylesheet">
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="padding: 20px; text-align: center; font-family: 'Philosopher', sans-serif;">
    <h1 style="margin: 0;">Reset Your 
      <span style="display: inline-block; padding: 0 1rem; transform: skewY(-2deg); background-color: #e6e6ff; color: #5c2d91; font-weight: bold; font-family: 'Philosopher', sans-serif;">
        <span style="transform: skewY(2deg); display: inline-block;">
          GradSpace
        </span>
      </span>
      Password
    </h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
    <p>To reset your password, click the button below:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{resetURL}" style="background-color: #5c2d91; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold; font-family: 'Philosopher', sans-serif;">Reset Password</a>
    </div>
    <p>This link will expire in 1 hour for security reasons.</p>
    <p>Best regards,<br>The GradSpace Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message. Please do not reply to this email.</p>
  </div>
</body>
</html>
`;
