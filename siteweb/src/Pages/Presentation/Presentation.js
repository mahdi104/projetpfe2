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
              Pour chaque Jour vous exigez un environnement propre et sain{" "}
              <span className="style-lo">Brinet</span> conçoit, fabrique et
              distribue des solution et des produits d'entertien innovant
              d'entretien d'hygiène et desinfection Nous Vous proposons une
              sélection de produits et services déstinés a vous simplifier
              l'hygienne et dévlopper vos Affaires Notre experience nous permet
              de mettre à votre disposition
              <ul className="style-li">
                <li>
                  Des Gammes professionnelles et spécialiser à chacun de vos
                  métier
                </li>
                <li>
                  La force et le savoir faire des grandes marque de détergence
                  qui ont fait leurs preuves
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