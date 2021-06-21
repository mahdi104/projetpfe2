import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Errors from "../../Component/Errors";
import background from "../../Assets/image/iss.jpg";

import { register, videErrors } from "../../JS/action/user";

import "./SignUp.css";

const SignUp = ({ history }) => {
  const [user, setuser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    etablissement: "",
  });
  const errors = useSelector((state) => state.userReducer.errors);
  console.log(`errrooooos :${errors.length}`);
  const dispatch = useDispatch();
  console.log(history);
  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    return () => {
      dispatch(videErrors());
    };
  }, []);
  return (
    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
      <div className="card card0 border-0">
        <div className="row d-flex">
          <div className="col-lg-6">
            {" "}
            <img src={background} className="image" />
          </div>{" "}
          <div className="col-lg-6">
            <div className="card2 card border-0 px-4 py-5">
              <div className="row px-3">
                {" "}
                <label className="mb-1">
                  <h6 className="mb-0 text-sm">First Name</h6>
                </label>{" "}
                <input
                  className="mb-4"
                  type="text"
                  name="firstname"
                  onChange={handleChange}
                  placeholder="Enter a valid Name"
                />{" "}
                <label className="mb-1">
                  <h6 className="mb-0 text-sm">Last Name</h6>
                </label>{" "}
                <input
                  className="mb-4"
                  type="text"
                  name="lastname"
                  onChange={handleChange}
                  placeholder="Enter a valid Name"
                />{" "}
              </div>
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
                  <h6 className="mb-0 text-sm">Ettablissement</h6>
                </label>{" "}
                <input
                  type="text"
                  name="etablissement"
                  placeholder="Enter Ettablissement"
                  onChange={handleChange}
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
                  onClick={() => dispatch(register(user, history))}
                >
                  SignUp
                </button>{" "}
              </div>
              <div className="row mb-4 px-3">
                {" "}
                <small className="font-weight-bold">
                  Don't have an account?{" "}
                  <Link to="/signin">
                    <a className="text-danger ">SignIn</a>
                  </Link>
                </small>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;