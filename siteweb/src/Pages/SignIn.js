import React, { useState, useEffect } from "react";
import "./SignUp/SignUp.css";
import { useDispatch, useSelector } from "react-redux";
import { login, videErrors } from "../JS/action/user";
import { Link } from "react-router-dom";
import background from "../Assets/image/iss.jpg";

const SignIn = ({ history }) => {
  const [errorHandle, setErrorHandle] = useState(false)
  const [user, setuser] = useState({email:"",password:""});
  const [isSubmit,setIsSubmit]= useState(false)
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.userReducer.errors);
  // console.log(errors);
  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    return () => {
      dispatch(videErrors());
    };
  }, []);
  
  const handleSubmit=(e)=>{
    e.preventDefault(); 
    videErrors();
    setIsSubmit(true)
  }
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
            <div className="card1 border-0 px-4 py-1">
              <img src={background} className="image" />{" "}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card2 card border-0 px-4 py-5 mt-3 ">

              <form onSubmit={handleSubmit}>
              <div className="row px-3">
                {" "}
                <label className="mb-1">
                  <h6 className="mb-0 text-sm" style={errorHandle&&!validateEmail(user.email)?{color:"red"}:null}>Adresse email</h6>
                </label>{" "}
                <input
                  className="mb-4"
                  required
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={(e)=>{handleChange(e);dispatch(videErrors());}}
                  placeholder="Entrer une adresse mail valide"
                />{" "}
              </div>

              <div className="row px-3">
                {" "}
                <label className="mb-1">
                  <h6 className="mb-0 text-sm" style={errorHandle&&!testPassword(user.password)?{color:"red"}:null}> Mot de passe</h6>
                </label>{" "}
                <input
                  required
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={(e)=>{handleChange(e);dispatch(videErrors());}}
                  placeholder="Entrer le mot de passe"
                />{" "}
              </div>
              <div className="row mb-3 px-3">
                {" "}
                <button
                  type="submit"
                  className="btn btn-blue text-center"
                  onClick={(e) => {e.preventDefault();
                    // console.log(validateEmail(user.email));
                    if(validateEmail(user.email)&&testPassword(user.password)){
                    dispatch(login(user, history));
                  setErrorHandle(false)}
                    else{setErrorHandle(true)}
                  }}
                >
                  Se connecter
                </button>{" "}
              </div>
              <div className="row mb-4 px-3">
                {" "}
                <small className="font-weight-bold">
                  Pas de compte sur notre site?{" "}
                  <a className="text-danger ">
                    <Link to="/signup">S'inscrire</Link>{" "}
                  </a>
                </small>{" "}
                </div>
                </form>
        {errors.map((e)=>{if(e.msg!=="Unauthorized") {return <h5 style={{color:"red"}}>{e.msg}</h5>}})}
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default SignIn;
