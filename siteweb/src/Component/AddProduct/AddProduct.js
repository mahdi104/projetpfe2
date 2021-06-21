import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, editProduct, toggleFalse } from "../../JS/action/product";
import { Button, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./AddProduct.css";
const AddProduct = ({ history, match }) => {
  const [product, setProduct] = useState({
    img: "",
    title: "",
    description: "",
    details: "",
    categories: "",
  });
  const id = match.params.id;
  const productReducer = useSelector((state) => state.productReducer.products);
  const edit = useSelector((state) => state.productReducer.isEdit);
  const dispatch = useDispatch();
  useEffect(() => {
    edit
      ? setProduct(productReducer)
      : setProduct({ description: "", details: "", categories: "" });
  }, [productReducer, edit]);
  const handleProduct = () => {
    if (!edit) {
      dispatch(addProduct(product));
    } else {
      dispatch(editProduct(product._id, product));
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  console.log(product.title);
  return (
    <Form className="postyle">
      <Form.Field>
        <label>Upload Image</label>
        <input
          type="file"
          name="image"
          id="image"
          onChange={(e) => {
            setProduct({ ...product, [e.target.name]: e.target.files[0] });
          }}
        />
      </Form.Field>
      <Form.Field>
        <label> Title</label>
        <input
          value={product.title}
          placeholder=" Title"
          name="title"
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <input
          value={product.description}
          placeholder="description"
          name="description"
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Details</label>
        <input
          value={product.details}
          placeholder="details"
          name="details"
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Catégories</label>
        <input
          value={product.categories}
          placeholder="Catégories"
          name="categories"
          onChange={handleChange}
        />
      </Form.Field>
      <Link to="/Get">
        <Button
          type="submit"
          onClick={(e) => {
            const Data = new FormData();
            Data.append("title", product.title);
            Data.append("description", product.description);
            Data.append("details", product.details);
            Data.append("categories", product.categories);
            Data.append("file", product.image);
            if (!edit) {
              dispatch(addProduct(Data, history));
            } else {
              dispatch(editProduct(id, Data, history));
              dispatch(toggleFalse());
            }

            e.preventDefault();
          }}
        >
          {!edit ? "Save" : "edit"}
        </Button>
      </Link>
    </Form>
  );
};

export default AddProduct;