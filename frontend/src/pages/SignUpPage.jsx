import { motion } from "framer-motion";
import Input from "../components/Input";
import { Mail, User, Lock, Loader } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import { useAuthStore } from "../store/authStore";

const SignUpPage = () => {
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { signUp, error, isLoading } = useAuthStore();
  const navigate = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signUp(user);
      navigate("/verify-email");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-black bg-opacity-30 shadow-lg rounded-lg overflow-hidden backdrop-filter backdrop-blur-3xl "
    >
      <div className="px-6 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-violet-100 to-violet-400 text-transparent bg-clip-text">
          Create Account
        </h2>
        <form onSubmit={handleSignUp}>
          <Input
            icon={User}
            type="text"
            placeholder="Full Name"
            value={user.name}
            onChange={(e) => setuser({ ...user, name: e.target.value })}
          ></Input>
          <Input
            icon={Mail}
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setuser({ ...user, email: e.target.value })}
          ></Input>
          <Input
            icon={Lock}
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setuser({ ...user, password: e.target.value })}
          ></Input>
          {error && (
            <p className="text-red-500 text-center font-semibold mt-2">
              {error}
            </p>
          )}
          {/* password strength meter */}
          <PasswordStrengthMeter password={user.password} />
          <motion.button
            className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-violet-500 to-violet-700 text-white 
						font-bold rounded-lg shadow-lg hover:from-violet-600
						hover:to-violet-900 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2
						 focus:ring-offset-gray-900 transition duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            // disabled={isLoading}
          >
            {isLoading ? (
              <Loader className=" animate-spin mx-auto" size={24} />
            ) : (
              "Sign Up"
            )}
          </motion.button>
        </form>
      </div>
      <div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
        <p className="text-sm text-gray-400">
          Already have an account?{" "}
          <Link to={"/login"} className="text-violet-300 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default SignUpPage;
