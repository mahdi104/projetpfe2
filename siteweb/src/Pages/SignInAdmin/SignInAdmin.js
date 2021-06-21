import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin, videErrors } from "../../JS/action/admin";
import Errors from "../../Component/Errors";
import background from "../../Assets/image/iss.jpg";
import { Link } from "react-router-dom";

const SignInAdmin = ({ history }) => {
  const [admin, setAdmin] = useState();
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.adminReducer.errors);
  console.log(errors);
  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    return () => {
      dispatch(videErrors());
    };
  }, []);
  return (
    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
      {errors.length > 0 ? errors.map((el) => <Errors error={el} />) : null}
      <div className="card card0 border-0">
        <div className="row d-flex">
          <div className="col-lg-6">
            <div className="card1 border-0 px-4 py-1">
              <img src={background} className="image" />{" "}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card2 card border-0 px-4 py-5 mt-3 ">
              <div className="row px-3">
                {" "}
                <label className="mb-1">
                  <h6 className="mb-0 text-sm">Email Address</h6>
                </label>{" "}
                <input
                  className="mb-4"
                  type="text"
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter a valid email address"
                />{" "}
              </div>

              <div className="row px-3">
                {" "}
                <label className="mb-1">
                  <h6 className="mb-0 text-sm">Password</h6>
                </label>{" "}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Enter password"
                />{" "}
              </div>
              <div className="row mb-3 px-3">
                {" "}
                <button
                  type="submit"
                  className="btn btn-blue text-center"
                  onClick={() => dispatch(loginAdmin(admin, history))}
                >
                  <Link to="/interfaceadmin">SignIn</Link>
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInAdmin;