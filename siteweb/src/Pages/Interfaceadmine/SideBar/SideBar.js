import React from 'react'
import { Link } from "react-router-dom";
import "./SideBar.css"
const SideBar = () => {
    return (
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
      

    )
}

export default SideBar
