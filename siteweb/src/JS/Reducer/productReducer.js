import {
    GET_PRODUCT_LOAD,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAIL,
    TOGGLE_TRUE,
    TOGGLE_FALSE,
    GET_PRODUCT,
  } from "../actionType/product";
  
  const initState = {
    products: [],
    loadProducts: false,
    errors: [],
    isEdit: false,
    oneproduct: {},
  };
  
  const productReducer = (state = initState, { type, payload }) => {
    switch (type) {
      case GET_PRODUCT_LOAD:
        return {
          ...state,
          loadProducts: true,
        };
      case GET_PRODUCT_SUCCESS:
        return {
          ...state,
          products: payload,
          loadProducts: false,
        };
      case GET_PRODUCT_FAIL:
        return {
          ...state,
          errors: payload,
          loadProducts: false,
        };
      case TOGGLE_TRUE:
        return {
          ...state,
          isEdit: true,
        };
      case TOGGLE_FALSE:
        return {
          ...state,
          isEdit: false,
        };
      case GET_PRODUCT:
        return {
          ...state,
          oneproduct: payload,
        };
  
      default:
        return state;
    }
  };
  
  export default productReducer;