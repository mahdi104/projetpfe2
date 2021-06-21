import {
    LOGIN_ADMIN,
    LOGOUT_ADMIN,
    LOAD_ADMIN,
    CURRENT_ADMIN,
    FAIL_ADMIN,
  } from "../actionType/admin";
  import axios from "axios";
  export const loginAdmin = (admin, history) => async (dispatch) => {
    dispatch({ type: LOAD_ADMIN });
    try {
      const result = await axios.post("/api/admin/signin", admin);
      dispatch({ type: LOGIN_ADMIN, payload: result.data }); //msg /token , user
      history.push("/interfaceadmin");
    } catch (error) {
      dispatch({ type: FAIL_ADMIN, payload: error.response.data.errors });
    }
  };
  export const currentAdmin = () => async (dispatch) => {
    try {
      const options = {
        headers: { Authorization: localStorage.getItem("token") },
      };
      const result = await axios.get("/api/admin/current", options);
      dispatch({ type: CURRENT_ADMIN, payload: result.data });
    } catch (error) {
      dispatch({ type: FAIL_ADMIN, payload: error.response.data });
    }
  };
  export const logout = () => {
    return {
      type: LOGOUT_ADMIN,
    };
  };
  export const videErrors = () => {
    return {
      type: "VIDE_ERRORS",
    };
  };