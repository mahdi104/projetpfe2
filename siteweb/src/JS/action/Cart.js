import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../actionType/Cart";
export const addToCart = (data, qty) => async (dispatch, getState) => {

   
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        title: data.title,
        img: data.img,
        countInStock: data.countInStock,
        qty,
      },
    })
    localStorage.setItem('cartItems', JSON.stringify(data))
}
export const removeFromCart = (id) => (dispatch) => {
 
    dispatch({
      type: CART_REMOVE_ITEM,
      payload: id,
    })
  
    
  }
  