import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Errors from "../../Component/Errors";
import background from "../../Assets/image/iss.jpg";

import { register, videErrors } from "../../JS/action/user";

import "./SignUp.css";

const SignUp = ({ history }) => {
  const [errorHandle, setErrorHandle] = useState(false)
  const [user, setuser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    etablissement: "",
  });
  const errors = useSelector((state) => state.userReducer.errors);

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
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    return re.test(String(email).toLowerCase());
}
const testPassword=(x)=>  x.length>6
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
                  <h6 className="mb-0 text-sm">Nom</h6>
                </label>{" "}
                <input
                  className="mb-4"
                  type="text"
                  name="firstname"
                  onChange={handleChange}
                  placeholder="Entrer un nom valide"
                />{" "}
                <label className="mb-1">
                  <h6 className="mb-0 text-sm">Prénom</h6>
                </label>{" "}
                <input
                  className="mb-4"
                  type="text"
                  name="lastname"
                  onChange={handleChange}
                  placeholder="Entrer un prénom valide"
                />{" "}
              </div>
              <div className="row px-3">
                {" "}
                <label className="mb-1">
                <h6 className="mb-0 text-sm" style={errorHandle&&!validateEmail(user.email)?{color:"red"}:null}>Adresse email</h6>
                </label>{" "}
                <input
                  className="mb-4"
                  type="text"
                  name="email"
                  onChange={handleChange}
                  placeholder="Entrer une adresse mail valide"
                />{" "}
              </div>
              <div className="row px-3">
                {" "}
                <label className="mb-1">
                  <h6 className="mb-0 text-sm">Société</h6>
                </label>{" "}
                <input
                  type="text"
                  name="etablissement"
                  placeholder="Enter le nom de la société"
                  onChange={handleChange}
                />{" "}
              </div>
              <div className="row px-3">
                {" "}
                <label className="mb-1">
                  <h6 className="mb-0 text-sm"> Mot de passe</h6>
                </label>{" "}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Entrer le mot de passe"
                />{" "}
              </div>
              <div className="row mb-3 px-3">
                {" "}
                <button
                  type="submit"
                  className="btn btn-blue text-center"
                  onClick={(e) => {
                    e.preventDefault();
                    if(validateEmail(user.email)&&testPassword(user.password)){
                      dispatch(register(user, history))
                  setErrorHandle(false)}
                    else{setErrorHandle(true)}
                    
                  }
                    }
                >
                  S'inscrire
                </button>{" "}
                
              </div>
              {errors.map((e)=>{if(e.msg=="User already exist email should be unique") {return <h5 style={{color:"red"}}>{e.msg}</h5>}})}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;