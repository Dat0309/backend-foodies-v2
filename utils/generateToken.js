import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, 'admin', {
    expiresIn: "30d",
  });
};

export default generateToken;
