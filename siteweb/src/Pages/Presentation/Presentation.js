import React,{useEffect} from "react";
// import { useSelector,useDispatch } from "react-redux";
// import { currentUser } from "../../JS/action/user";
import { Card } from "react-bootstrap";
import logo from "../../Assets/image/logo.png"
import "./Presentation.css";

const Presentation = () => {
  // const user = useSelector((state) => state.userReducer.user);
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(currentUser());
  // }, []);
  return (
    <div>
      <Card className="pos">
        <Card.Img variant="top" src={logo} className="my-logo-style" />
        <Card.Body>
          <Card.Text>
         
            <p className="style-par">
            
              Parce que chaque jour vous exigez un environnement propre et sain, {" "}
              <span className="style-lo">Brinet</span> conçoit, fabrique et distribue des solutions et
              des produits innovants d'entretien d'hygiène et de désinfection.
              <br />
              Nous vous proposons une sélection de produits et services destinés
              à vous simplifier l'hygiène et développer vos affaires.
              <br />
              Notre expérience nous permet de mettre à votre disposition : 
              <ul className="style-li">
                <li>
                Des gammes professionnelles et spécialisées adaptées à chacun de vos métiers.
                </li>
                <li>
                La force et le savoir-faire des grandes marques de détergence qui ont fait leurs preuves.
                </li>
                <li>
                Des gammes de produits répondant au développement durable.
                </li>
                <li>
                L’efficacité prouvée pour l’entretien, l’hygiène et la désinfection.  
                </li>
              </ul>
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Presentation;