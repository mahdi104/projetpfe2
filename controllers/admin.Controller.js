const Admin = require("../model/Admin");
const bcrypt = require("bcrypt");
 const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");

// exports.SignUp = async (req, res) => {
//   try {
//     //   req.body
//     const { name, email, password } = req.body;

//     // check if the email is not found in the database
//     const FoundAdmin = await Admin.findOne({ email });

//     if (FoundAdmin) {
//       res.status(400).send({
//         errors: [{ msg: "Admin already exist email should be unique" }],
//       });
//       return;
//     }
//     const newAdmin = new Admin({ name, email, password });

//     // hash the password
//     const hashedpassword = await bcrypt.hash(password, salt);
//     newAdmin.password = hashedpassword;

//     //create a key using json webtoken
//     const token = jwt.sign(
//       {
//         id: newAdmin._id,
//       },
//       process.env.SECRET_KEY,
//       { expiresIn: 60 * 60 }
//     );
//     //then we save it in the database
//     await newAdmin.save();
//     res.status(200).send({ msg: "admin saved succ", Admin: newAdmin });
//   } catch (error) {
//     console.log(error);
//     res.status(400).send({ errors: [{ msg: "can not save the Admin" }] });
//   }
// };

exports.SignIn = async (req, res) => {
  try {
    // get the req.body
    const { email, password } = req.body;
    // seach if the user exist
    const searchAdmin = await Admin.findOne({ email });
    // console.log(searchAdmin);

    // send an error if he didnt exist
    if (!searchAdmin) {
      res.status(400).send({ errors: [{ msg: "Bad Credential" }] });
      return;
    }
    // check if the send it password is equal to the current Password
    const hashedpass = searchAdmin.password;
    const result = await bcrypt.compare(password, hashedpass);
    if (!result) {
      res.status(400).send({ errors: [{ msg: "Bad Credential" }] });
      return;
    }
    // else create a key
    const token = jwt.sign(
      {
        id: searchAdmin._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );

    // send the details + a key
    res.status(200).send({ msg: "auth success", Admin: searchAdmin, token });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({ errors: [{ msg: "can not get the current Admin" }] });
  }
};