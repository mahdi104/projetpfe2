const User = require("../model/User");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");

exports.SignUp = async (req, res) => {
  try {
    //   req.body
    const { firstname, lastname, email, password, etablissement } = req.body;

    // check if the email is not found in the database
    const FoundUser = await User.findOne({ email });
   

    if (FoundUser) {
      res.status(400).send({
        errors: [{ msg: "User already exist email should be unique" }],
      });
      return;
    }
    const status = "active";
    const newUser = new User({
      firstname,
      lastname,
      email,
      password,
      etablissement,
      status,
    });

    // hash the password
    const hashedpassword = await bcrypt.hash(password, salt);
    newUser.password = hashedpassword;

    //create a key using json webtoken
    const token = jwt.sign(
      {
        id: newUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: 60 * 60 }
    );
    //then we save it in the database
    await newUser.save();
    res.status(200).send({ msg: "User saved succ", User: newUser, token });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: [{ msg: "can not save the User" }] });
  }
};

exports.SignIn = async (req, res) => {
  try {
    // get the req.body
    const { email, password } = req.body;
    // seach if the user exist
    const searchUser = await User.findOne({ email });
    // console.log(searchAdmin);

    // send an error if he didnt exist
    if (!searchUser) {
      res.status(400).send({ errors: [{ msg: "Bad Credential" }] });
      return;
    }
    // check if the send it password is equal to the current Password
    const hashedpass = searchUser.password;
    const result = await bcrypt.compare(password, hashedpass);
    if (!result) {
      res.status(400).send({ errors: [{ msg: "Bad Credential" }] });
      return;
    }
    // else create a key
    const token = jwt.sign(
      {
        id: searchUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: 60 * 60 }
    );

    // send the details + a key
    res.status(200).send({ msg: "auth success", User: searchUser, token });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: [{ msg: "can not get the current User" }] });
  }
};
exports.EditUser = async (req, res) => {
  try {
    //   req.body

    // check if the email is not found in the database
    const FoundUser = await User.findOne(req.params);

    if (!FoundUser) {
      res.status(400).send({
        errors: [{ msg: "User doesn't exist" }],
      });
      return;
    }
    const updatedUser = await User.updateOne(req.params, { $set: req.body });

    res.status(200).send({ msg: "User updated succ", User: updatedUser });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: [{ msg: "can not update the User" }] });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    //   req.body

    // check if the email is not found in the database
    const FoundUser = await User.find({});

    if (!FoundUser) {
      res.status(400).send({
        errors: [{ msg: "User doesn't exist" }],
      });
      return;
    }

    res.status(200).send({ msg: "List of users", Users: FoundUser });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: [{ msg: "can not get the Users" }] });
  }
};

// exports.AddCart=async(req,res)=>{
//   try {
//     const user=await User.findById(req.user.id)
//     if(!user) return res.status(400).send({msg:"User Does Not Exist"})
//     await User.findOneAndUpdate({_id:req.user.id},{
//       cart:req.body.cart
//     })
//     return res.status(200).send({msg:"Added To Cart"})
//   } catch (err) {
//      return res.status(500).json({msg: err.message})
//   }
// }