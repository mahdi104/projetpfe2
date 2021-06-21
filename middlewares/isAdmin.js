const jwt = require("jsonwebtoken");
const Admin = require("../model/Admin");
const isAdmin = async (req, res, next) => {
  try {
    //test Token
    const token = req.headers["authorization"];
    // if the token is undefined =>
    if (!token) {
      return res.status(400).send({ errors: [{ msg: "Unauthorized" }] });
    }
    // get the id from the token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    // search the Admin
    const admin = await Admin.findOne({ _id: decoded.id });
    // send not authorisation IF NOT ADMIN
    if (!admin) {
      return res.status(400).send({ errors: [{ msg: "Unauthorized" }] });
    }
    // if admin exist
    req.admin = admin;
    next();
  } catch (error) {
    return res.status(500).send({ errors: [{ msg: "Unauthorized" }] });
  }
};
module.exports = isAdmin;