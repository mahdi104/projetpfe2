import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";
const PrivateRouteAdmin = ({ component: Component, ...rest }) => {
  const isAdmin = useSelector((state) => state.adminReducer.isAdmin);
  if (isAdmin) {
    return <Route component={Component} {...rest} />;
  }
  return <Redirect to="/" />;
};
export default PrivateRouteAdmin;