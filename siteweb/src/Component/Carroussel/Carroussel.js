import React from "react";
import { Carousel } from "react-bootstrap";
import FirstSlide from "../../Assets/image/slide1.png";
import SecondSlide from "../../Assets/image/slide2.jpg";
import ThirdSlide from "../../Assets/image/slide3.jpg";
import "./Carroussel.css"
const Carrousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={FirstSlide}
            alt="First slide"
            height="600"
          />
          <Carousel.Caption>
            <h2 className="sizestyle">Hygiène hospitalière</h2>
            <p className="par">Nous assurons une hygiène irréprochable pour les hôpitaux et les centres de soins</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={SecondSlide}
            alt="slide"

            height="600"
          />
          <Carousel.Caption>
            <h2 className="sizestyle">Notre solution</h2>
            <p className="par">Vous apporte le plus haut niveau de propreté dans vos cuisine</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ThirdSlide}
            alt="Third slide"
            height="600"
          />
          <Carousel.Caption>
            <h2 className="sizestyle">Be Safe</h2>
            <p className="par">
            Notre but est de protéger les gens tous les jours
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carrousel;