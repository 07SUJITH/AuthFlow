import jwt from "jsonwebtoken";
export const generateTokenAndSetCookie = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  const options = {
    // in local development, the cookie is sent over http only but in production, it is sent over https only
    secure: process.env.NODE_ENV === "production",
    httpOnly: true, // Ensures the cookie is sent only over HTTP(S), not client JavaScript, it prevent the xss attack
    sameSite: "strict", // This prevents the CSRF attack
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  };
  res.cookie("token", token, options);
  return token;
};
