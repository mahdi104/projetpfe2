const express = require("express");
const router = express.Router();

const { SignUp, SignIn } = require("../controllers/admin.Controller");
// const isAdmin = require("../middlewares/isAdmin");
const {
  registerValidation,
  signinValidation,
  validation,
} = require("../middlewares/Admin");
const { EditUser, getAllUsers } = require("../controllers/user.controller");

// router.post("/signup", registerValidation(), validation, SignUp);
router.post("/signin", signinValidation(), validation, SignIn);
router.put("/update:_id", EditUser);
router.get("/all", getAllUsers);
// router.get("/current", isAdmin, (req, res) => {
//   res.send({ admin: req.admin, msg: "sucess" });
// });

module.exports = router;