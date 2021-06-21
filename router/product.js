const express = require("express");
//express Router
const router = express.Router();

//multer
const multer = require("multer");
//define storage from the image
const storage = multer.diskStorage({
  // destination for files
  destination: function (request, file, callback) {
    callback(null, "public");
  },

  // add back the extension

  filename: function (request, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});

//upload parameters from multer

const upload = multer({
  storage: storage,
  // limits: {
  //   fieldSize: 1024 * 1024 * 3,
  // },
}).single("file");

const isAdmin = require("../middlewares/isAdmin");

// require controllers

const {
  create,
  Retrieve,
  deleteProduct,
  editProduct,
  getProductByCategories,
  getProductById,
} = require("../controllers/product.controller");

router.post("/", isAdmin, upload, create);
router.get("/", Retrieve);
router.delete("/:_id", isAdmin, deleteProduct);
router.put("/:_id", isAdmin, upload, editProduct);
router.get("/categorie/:cat", getProductByCategories);
router
  .route('/:id')
  .get(getProductById)

module.exports = router;