import jwt from "jsonwebtoken";

// router.get("/check-auth", verifyToken, checkAuth);
// when hit the endpoint /check-auth, this middleware (verifyToken) will be called first to check the token is valid or not
// if token is valid, then only it will go to the next controller function (checkAuth)
export const verifyToken = (req, res, next) => {
  // to get data from cookies.
  // import cookie-parser in index.js
  // app.use(cookieParser()); allow us to parse incoming cookies from the client
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized no token provided",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error("Error during token verification:", error);
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }
};
