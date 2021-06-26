import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const isUser = useSelector((state) => state.userReducer.isUser);
  if (isUser) {
    return <Route component={Component} {...rest} />;
  }
  return <Redirect to="/*" />;
};
export default PrivateRoute;