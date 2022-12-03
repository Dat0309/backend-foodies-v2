import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../Models/UserModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, 'admin');

      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

const admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an Admin");
  }
};

const guest = (req, res, next) => {
  if(req.user && req.user.role === 'guest'){
    next();
  }else{
    res.status(401);
    throw new Error("Not authorized as an Guest");
  }
};

const shipper = (req, res, next) => {
  if(req.user && req.user.role === 'shipper') {
    next();
  }else{
    res.status(401);
    throw new Error("Not authorized as an Shipper");
  }
};

const owners = (req, res, next) => {
  if(req.user && req.user.role === 'owners'){
    next();
  } else{
    res.status(401);
    throw new Error("Not authorized as an Owners");
  }
};

const updater = (req, res, next) => {
  if(req.user && (req.user.role === "admin" || req.user.role === "owners")){
    next();
  }else{
    res.status(401);
    throw new Error("Not authorized as an Updater");
  }
}

export { protect, admin, guest, shipper, owners, updater };
