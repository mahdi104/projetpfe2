import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import "./Profile.css";
import { currentUser } from "../../JS/action/user";
const Profile = () => {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(currentUser);
  },[]);

  return (
    <div className="container profile">
      {/* /Breadcrumb */}
      <div className="row gutters-sm">
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt="Admin"
                  className="rounded-circle"
                  width={150}
                />
                <div className="mt-3">
                  <h4>{user && user.firstname}</h4>
                  <p className="text-secondary mb-1"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Nom</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {(user && user.firstname) || ""}
                </div>
              </div>
              <hr />{" "}
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Prénom</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {(user && user.lastname) || ""}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Adresse email</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {(user && user.email) || ""}
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;