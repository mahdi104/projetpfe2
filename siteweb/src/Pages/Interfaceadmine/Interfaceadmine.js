import React from "react";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { currentAdmin } from "../../JS/action/admin";

import "./InterfaceAdmin.css";
const InterfaceAdmin = () => {
  // const dispatch = useDispatch();
  return (
    <div>
      <div className="sideBar">
        <Link to="/AddProduct">Ajouter Produit</Link>
        <Link to="/Update">Mise à Jour Produit</Link>
        <Link to="/Get">Liste Des Produits</Link>
        <Link to="/listeUtilisateurs">Liste Des Utilisateurs</Link>
      </div>
    </div>
  );
};

export default InterfaceAdmin;