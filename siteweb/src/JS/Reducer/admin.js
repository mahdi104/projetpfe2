import {
    LOGIN_ADMIN,
    LOGOUT_ADMIN,
    LOAD_ADMIN,
    CURRENT_ADMIN,
    FAIL_ADMIN,
  } from "../actionType/admin";
  const initialState = {
    admin: null,
    isAdmin: false,
    loadAdmin: false,
    errors: [],
  };
  const adminReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case LOAD_ADMIN:
        return { ...state, loadAdmin: true };
      case LOGIN_ADMIN:
        localStorage.setItem("token", payload.token);
        return {
          ...state,
          loadAdmin: false,
          admin: payload.Admin,
          isAdmin: true,
          errors: [],
        };
      case CURRENT_ADMIN:
        return {
          ...state,
          loadAdmin: false,
          admin: payload,
          isAdmin: true,
          errors: [],
        };
      case FAIL_ADMIN:
        return { ...state, loadAdmin: false, errors: payload };
      case LOGOUT_ADMIN:
        localStorage.removeItem("token");
        return {
          ...state,
          LOAD_ADMIN: false,
          errors: [],
          admin: {},
          isAuth: false,
        };
      case "VIDE_ERRORS":
        return { ...state, errors: [] };
      default:
        return state;
    }
  };
  export default adminReducer;