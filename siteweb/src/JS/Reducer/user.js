import {
    CURRENT_USER,
    FAIL_USER,
    LOAD_USER,
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
    GET_ALL_USERS,
  } from "../actionType/user";
  
  const initialState = {
    user: null,
    isUser: false,
    loadUser: true,
    errors: [],
    users: [],
  };
  
  const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case LOAD_USER:
        return { ...state, loadUser: true };
      case REGISTER_USER:
        localStorage.setItem("token", payload.token);
        return {
          ...state,
          loadUser: false,
          user: payload.User,
          isUser: true,
          errors: [],
        };
      case LOGIN_USER:
        localStorage.setItem("token", payload.token);
        return {
          ...state,
          loadUser: false,
          user: payload.User,
          isUser: true,
          errors: [],
        };
      case CURRENT_USER:
        return {
          ...state,
          user: payload,
          isUser: true,
          loadUser: false,
          errors: [],
        };
      case GET_ALL_USERS:
        return {
          ...state,
          loadUser: false,
          users: payload,
          errors: [],
        };
      case FAIL_USER:
        return { ...state, loadUser: false, errors: payload,isUser: false };
      case LOGOUT_USER:
        localStorage.removeItem("token");
        return {
          ...state,
          loadUser: false,
          errors: [],
          user: {},
          isUser: false,
        };
      case "VIDE_ERRORS":
        return { ...state, errors: [] };
      default:
        return state;
    }
  };
  export default userReducer;