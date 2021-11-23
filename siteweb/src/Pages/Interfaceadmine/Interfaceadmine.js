import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { currentAdmin } from "../../JS/action/admin";

import "./InterfaceAdmin.css";


const InterfaceAdmin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentAdmin());
  }, []);
  return (
    <div>

      <div className="sideBar">
            <ul>
                <li>
                    <Link to="/AddProduct" className="ezdine">Ajouter Produit</Link>
                </li>
                <li>
                    <Link to="/Update" className="ezdine">Mise à Jour Produit</Link>
                </li>
                <li>
                    <Link to="/Get" className="ezdine">Liste Des Produits</Link>
                </li>
                <li>
                    <Link to="/listeUtilisateurs" className="ezdine">Liste Des Utilisateurs</Link>
                </li>
            </ul>
      </div>
    </div>
  );
};

export default InterfaceAdmin;