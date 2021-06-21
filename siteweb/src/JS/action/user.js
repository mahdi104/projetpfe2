import {
    CURRENT_USER,
    FAIL_USER,
    LOAD_USER,
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
    GET_ALL_USERS,
  } from "../actionType/user";
  
  import axios from "axios";
// import Product from "../../../../model/Product";
  
  export const register = (newUser, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
      const result = await axios.post("/api/user/signup", newUser);
      console.log("yesssssss", result);
      dispatch({ type: REGISTER_USER, payload: result.data }); //msg , token , user
  
      history.push("/profile");
    } catch (error) {
      console.log("helooooooooo" + error.response.data.errors);
      // error.response.data.errors.map((el) => alert(el.msg));
      dispatch({ type: FAIL_USER, payload: error.response.data.errors });
    }
  };
  
  export const login = (user, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
  
    try {
      const result = await axios.post("/api/user/signin", user);
      dispatch({ type: LOGIN_USER, payload: result.data }); //msg /token , user
      if (result.data.User.status === "active") {
        history.push("/Profile");
      } else {
        history.push("/errors");
      }
    } catch (error) {
      // error.response.data.errors.map((el) =>
      //   setTimeout(function () {
      //     alert(el.msg);
      //   }, 3000)
      // );
      dispatch({ type: FAIL_USER, payload: error });
    }
  };
  
  export const currentUser = () => async (dispatch) => {
    try {
      const options = {
        headers: { Authorization: localStorage.getItem("token") },
      };
      const result = await axios.get("/api/user/current", options);
      dispatch({ type: CURRENT_USER, payload: result.data });
    } catch (error) {
      dispatch({ type: FAIL_USER, payload: error.response.data });
    }
  };
  
  export const logout = () => {
    return {
      type: LOGOUT_USER,
    };
  };
  
  export const videErrors = () => {
    return {
      type: "VIDE_ERRORS",
    };
  };
  
  export const getUsers = () => async (dispatch) => {
    try {
      //ZID ZOK OM EL AUTH ADMIN LENNA W FL BACK
      // const options = {
      //   headers: { Authorization: localStorage.getItem("token") },
      // };.
      //ma tensech el options
      const result = await axios.get("api/admin/all");
      dispatch({ type: GET_ALL_USERS, payload: result.data.Users });
    } catch (error) {
      dispatch({ type: FAIL_USER, payload: error.response.data });
    }
  };
  export const update = (id, info) => async (dispatch) => {
    try {
      //ZID ZOK OM EL AUTH ADMIN LENNA W FL BACK
      // const options = {
      //   headers: { Authorization: localStorage.getItem("token") },
      // };.
      //ma tensech el options
      const result = await axios.put(`api/admin/update${id}`, info);
      dispatch(getUsers());
    } catch (error) {
      dispatch({ type: FAIL_USER, payload: error.response.data });
    }
};

// export const addCart = async (product) => {
//   if(!login) return alert("Please login to continue buying")

//   const check = cart.every(item =>{
//       return item._id !== product._id
//   })

//   if(check){
//       setCart([...cart, {...product, quantity: 1}])

//       await axios.patch('/user/addcart', {cart: [...cart, {...product, quantity: 1}]}, {
//           headers: {Authorization: token}
//       })

//   }else{
//       alert("This product has been added to cart.")
//   }
// }