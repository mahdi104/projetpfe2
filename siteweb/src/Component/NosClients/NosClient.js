import React,{useState} from 'react'
import {Carousel } from 'react-bootstrap'
import THG from "../../Assets/image/THG.png"
import Amen from "../../Assets/image/Amen.png"
import Clinique from "../../Assets/image/clinique.png"
import "./NosClients.css"

const NosClient = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
    <div>       
      <div className="background">
        <h2 className="styletype">Nos Clients</h2>
      </div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="sizestyle"
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={THG}
            alt="First slide"
            width="640px"
            height="360px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Amen}
            alt="Second slide"
            width="640px"
            height="360px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Clinique}
            alt="Third slide"
            width="640px"
            height="360px"
          />
        </Carousel.Item>
      </Carousel>
    </div>
    )
}

export default NosClient
