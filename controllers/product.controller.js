const Product = require("../model/Product");

/**
   @desc : Create  
   @path : http://localhost:7000/api/product/
   @method : Post
   @data : no data
   @access : public/private
  */
const create = async (req, res) => {
  try {
    const { title, description, details, categories } = req.body;
    console.log(req.body)

    if (!title || !description) {
      res.status(400).send({ msg: "title and description are required" });
      return;
    }
    const product = await Product.findOne({ title });
    if (product) {
      res.status(400).send({ msg: "Product Already exist" });
      return;
    }
    const newproduct = new Product({
      title,
      description,
      details,
      categories,
      img: req.file.filename,
    });
    await newproduct.save();
    res.status(200).send({ msg: "Product Added Successfully", newproduct });
  } catch (error) {
    res.status(400).send({ msg: "cannot add a Product", error: error });
  }
};

/**
 *  @desc : Get All Contacts
 * @path : http://localhost:7000/api/product
 * @method : GET
 * @data : no data
 * @access : public/private
 */
const Retrieve = async (req, res) => {
  try {
    const listProduct = await Product.find({});
    res.status(200).send({ msg: "List Of Product", listProduct });
  } catch (error) {
    res.status(400).send({ msg: "Cannot Get All Product", error });
  }
};
const deleteProduct = async (req, res) => {
  const { _id } = req.params;
  try {
    const productToDelete = await Product.findOneAndRemove({ _id });
    // console.log(productToDelete);
    if (!productToDelete) {
      res.status(200).send({ msg: "Product already deleted ..." });
      return;
    }
    res.status(200).send({ msg: "Product deleted ...", productToDelete });
  } catch (error) {
    res
      .status(400)
      .send({ msg: "Can not delete Product with this id !!", error });
  }
};

const editProduct = async (req, res) => {
  try {
    const { description, details, categories } = req.body;
    const productToEdit = await Product.updateOne(
      { _id: req.params._id },
      {
        $set: {
          description,
          details,
          categories,
          img: req.file.filename,
        },
      }
    );

    res.status(200).send({ msg: "Product updated ..", productToEdit });
  } catch (error) {
    res
      .status(400)
      .send({ msg: "Can not edit Product with this id !!", error });
  }
};

const getProductByCategories = async (req, res) => {
  try {
    const { cat } = req.params;
    const productToFind = await Product.find({ categories: cat });
    console.log(productToFind);
    res.status(200).send({ msg: "The Product", productToFind });
  } catch (error) {
    res
      .status(400)
      .send({ msg: "Can not get Product with this categorie !!", error });
  }
};
const getProductById=async(req,res)=>{
  try {
    const product=await Product.findById(req.params._id)
    console.log(product)
      if(product){
        res.status(200).send(product)
      }
  } catch (error) {
    res.status(400).send({msg:"Product Not Found"})
    
  }
}
module.exports = {
  create,
  Retrieve,
  deleteProduct,
  editProduct,
  getProductByCategories,
  getProductById,
};