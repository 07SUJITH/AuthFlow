import express from "express";
import {
  signup,
  login,
  logout,
  verifyEmail,
  forgotPassword,
  resetPassword,
  checkAuth,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { verify } from "crypto";
const router = express.Router();

// for checking user is authenticated or not
// verifyToken is the middleware to check the token
router.get("/check-auth", verifyToken, checkAuth);

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
export default router;
