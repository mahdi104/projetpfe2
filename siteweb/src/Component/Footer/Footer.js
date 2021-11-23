import React from 'react'
import { CardGroup,Card } from "react-bootstrap";
import adress from "../../Assets/image/adress.png"
import email from "../../Assets/image/email.png"
import logo from "../../Assets/image/logobrinet.png";
import tel from "../../Assets/image/tel.png"
import "./Footer.css"
const Footer = () => {
    return (
        <div>
            <CardGroup >
                <Card className="stylecard">
                    <Card.Img variant="top" src={logo} className="stylelogo" />
                    <Card.Body >
                        
                        <Card.Text className="textstyle">
                            Brinet est spécialisé dans la vente des produits d'entretien à usage professionnel:
                            <br/>Ponçage, rénovation et protection pour marbre et pierres naturelles, 
                            <br/>nettoyage à fond des cuisines, moquettes, etc.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body  className="stylecard">
                        <Card.Title className="textstyle">

                        </Card.Title>
                        <Card.Text className="textstyle">
                            <ul>
                                <li>
                                    <img src={adress} className="imagestyle" alt="adresse"/>  
                                    10 Rue Narcisse, Bardo 2000
                                </li>
                                <br/>
                                <li>
                                    <img src={email} className="imagestyle" alt="email"/>  
                                    mohamedamine.dimassi@planet.tn
                                </li>
                                <br/>
                                <li>
                                    <img src={tel} className="imagestyle" alt="tel"/>  
                                    (+216) 55 457 371
                                </li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}

export default Footer

