import axios from "axios";
// import { Children } from "react";

import {
  GET_PRODUCT_LOAD,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  TOGGLE_TRUE,
  TOGGLE_FALSE,
  GET_PRODUCT,
} from "../actionType/product";

//Get Product

export const getProduct = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_LOAD });
  try {
    const options = {
      headers: { Authorization: localStorage.getItem("token") },
    };
    const res = await axios.get("/api/product", options);
    console.log(res);
    dispatch({
      type: GET_PRODUCT_SUCCESS,
      payload: res.data.listProduct,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_FAIL,
      payload: error,
    });
    console.log(error);
  }
};

//Delete Product

export const deleteProduct = (id) => async (dispatch) => {
  try {
    const options = {
      headers: { Authorization: localStorage.getItem("token") },
    };
    await axios.delete(`/api/product/${id}`, options);
    dispatch(getProduct());
  } catch (error) {
    console.log(error);
  }
};

//Add Product
export const addProduct = (newProduct, history) => async (dispatch) => {
  try {
    const options = {
      headers: { Authorization: localStorage.getItem("token") },
    };
    await axios.post("/api/product", newProduct, options);
    dispatch(getProduct());
    history.push("/Get");
  } catch (error) {
    console.log(error);
  }
};

//edit Product

export const editProduct = (id, newProduct, history) => async (dispatch) => {
  try {
    const options = {
      headers: { Authorization: localStorage.getItem("token") },
    };
    const res = await axios.put(`/api/product/${id}`, newProduct, options);
    console.log(res.data);
    history.push("/Get");
  } catch (error) {
    console.log("error");
  }
};

// Toggle true
export const toggleTrue = () => {
  return {
    type: TOGGLE_TRUE,
  };
};

// Toggle false
export const toggleFalse = () => {
  return {
    type: TOGGLE_FALSE,
  };
};
// Get Product By Categories
export const getProductByCategories = (categories) => async (dispatch) => {
  try {
    const options = {
      headers: { Authorization: localStorage.getItem("token") },
    };
    const res = await axios.get(
      `/api/product/categorie/${categories}`,
      options
    );

    dispatch({
      type: GET_PRODUCT,
      payload: res.data.productToFind,
    });
  } catch (error) {
    console.log(error);
  }
};
//Get Product By Id
export const getProductById = (id) => async (dispatch) => {
  try {
    const options = {
      headers: { Authorization: localStorage.getItem("token") },
    };
    const res = await axios.get(
      `/api/product/${id}`,
      options
    );
    dispatch({
      type: GET_PRODUCT,
      payload: res.data.productToFind,
    });
  } catch (error) {
    console.log(error);
  }
};