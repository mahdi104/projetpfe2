import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const loadUser = useSelector((state) => state.userReducer.loadUser);
  const isUser = useSelector((state) => state.userReducer.isUser);
  
  if(!loadUser){
    if(isUser){
    return <Route component={Component} {...rest} />;
    
  }
  return <Redirect to="/*" />;
}
return("loading")
    
  
};
export default PrivateRoute;