const express = require("express");
const router = express.Router();
const { SignUp, SignIn, AddCart, deleteUser } = require("../controllers/user.Controller");
const isAdmin = require("../middlewares/isAdmin");

const isUser = require("../middlewares/isUser");

const {
  registerValidation,
  signinValidation,
  validation,
} = require("../middlewares/user");

router.post("/signup", registerValidation(), validation, SignUp);
 router.post("/signin", signinValidation(), validation, SignIn);
router.get("/current",isUser, (req, res) => {
  res.send(req.user);
});


// router.patch('/addCart',isUser, AddCart); 
module.exports = router;
