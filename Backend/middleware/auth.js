import jwt from "jsonwebtoken";


export const isAuthenticated = async (req, res, next) => {
  try {
    const token =
      req.cookies?.token || req.headers.authorization?.split(" ")[1]; 

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "token not found",
      });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log("Decoded JWT:", decoded);

    req.user = decoded; 
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};


export const authorize = (allowedRoles = []) => (req, res, next) => {
  try {
    const userRole = req.user.role?.toLowerCase();   
    console.log("User Role Normalized:", userRole);

    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({ 
        message: "You do not have permission", 
        role: req.user.role 
      });
    }

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};


