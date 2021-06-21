import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Errors = ({ error }) => {
  const [alert, setAlert] = useState(true);
  const errors = useSelector((state) => state.userReducer.errors);

  return (
    <div class="alert alert-primary" role="alert">
      <h2>Error 404 Not Found</h2>
    </div>
  );
};
export default Errors;