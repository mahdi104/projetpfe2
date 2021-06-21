import React from "react";
import { Carousel } from "react-bootstrap";
import FirstSlide from "../../Assets/image/slide1.jpg";
import SecondSlide from "../../Assets/image/slide2.jpg";
import ThirdSlide from "../../Assets/image/slide3.jpg";
const Carrousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={FirstSlide}
            alt="First slide"
            height="720"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={SecondSlide}
            alt="slide"
            height="720"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ThirdSlide}
            alt="Third slide"
            height="720"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carrousel;