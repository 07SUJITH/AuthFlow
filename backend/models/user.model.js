/**
 * @typedef {Object} User
 * @property {string} username - The username of the user, must be unique and trimmed.
 * @property {string} email - The email of the user, must be unique and trimmed.
 * @property {string} password - The password of the user.
 * @property {Date} lastLogin - The last login date of the user.
 * @property {boolean} isVerified - Indicates if the user's email is verified.
 * @property {string} resetPasswordToken - Token for resetting the password.
 * @property {Date} resetPasswordExpiresAt - Expiry date for the reset password token.
 * @property {string} verificationToken - Token for email verification.
 * @property {Date} verificationTokenExpiresAt - Expiry date for the verification token.
 */

/**
 * @constant {mongoose.Schema} userSchema - Mongoose schema for the User model.
 * @property {Object} username - The username field configuration.
 * @property {Object} email - The email field configuration.
 * @property {Object} password - The password field configuration.
 * @property {Object} lastLogin - The last login field configuration.
 * @property {Object} isVerified - The email verification status field configuration.
 * @property {Object} resetPasswordToken - The reset password token field configuration.
 * @property {Object} resetPasswordExpiresAt - The reset password token expiry date field configuration.
 * @property {Object} verificationToken - The email verification token field configuration.
 * @property {Object} verificationTokenExpiresAt - The email verification token expiry date field configuration.
 * @property {boolean} timestamp - Automatically adds createdAt and updatedAt fields to the schema.
 */
import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
