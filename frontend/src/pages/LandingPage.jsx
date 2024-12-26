import { Link } from "react-router-dom";

const features = [
  {
    title: "Database Setup",
    description: "Setup your database for authentication.",
  },
  {
    title: "Signup Endpoint",
    description: "Create a signup endpoint for new users.",
  },
  {
    title: "📧 Sending Verify Account Email",
    description: "Send verification emails to users.",
  },
  {
    title: "🔍 Verify Email Endpoint",
    description: "Endpoint to verify user emails.",
  },
  {
    title: "📄 Building a Welcome Email Template",
    description: "Create a template for welcome emails.",
  },
  { title: "🚪 Logout Endpoint", description: "Endpoint to logout users." },
  { title: "🔑 Login Endpoint", description: "Endpoint to login users." },
  {
    title: "🔄 Forgot Password Endpoint",
    description: "Endpoint to handle forgotten passwords.",
  },
  {
    title: "🔁 Reset Password Endpoint",
    description: "Endpoint to reset user passwords.",
  },
  {
    title: "✔️ Check Auth Endpoint",
    description: "Endpoint to check user authentication status.",
  },
  {
    title: "🌐 Frontend Setup",
    description: "Setup the frontend for the authentication system.",
  },
  {
    title: "📋 Signup Page UI",
    description: "User interface for signup page.",
  },
  { title: "🔓 Login Page UI", description: "User interface for login page." },
  {
    title: "✅ Email Verification Page UI",
    description: "User interface for email verification page.",
  },
  {
    title: "📤 Implementing Signup",
    description: "Implement the signup functionality.",
  },
  {
    title: "📧 Implementing Email Verification",
    description: "Implement email verification functionality.",
  },
  {
    title: "🔒 Protecting Our Routes",
    description:
      "Protect routes to ensure only authenticated users can access.",
  },
  {
    title: "🔑 Implementing Login",
    description: "Implement the login functionality.",
  },
  { title: "🏠 Dashboard Page", description: "User dashboard page." },
  {
    title: "🔄 Implementing Forgot Password",
    description: "Implement forgot password functionality.",
  },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-4xl font-bold mt-10">Welcome to AuthFlow</h1>
      <p className="text-lg mt-4 mb-8 text-center">
        AuthFlow is a comprehensive authentication system with the following
        features:
      </p>
      <div className="mt-10 flex space-x-4 mb-10">
        <Link
          to="/login"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Signup
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
