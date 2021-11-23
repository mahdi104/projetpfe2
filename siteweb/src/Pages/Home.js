import React from "react";
import Carrousel from "../Component/Carroussel/Carroussel";
import Footer from "../Component/Footer/Footer";

import Presentation from "../Component/Presentation/Presentation";


const Home = () => {
  return (
    <div>
      <Carrousel />
     <Presentation/>

      <Footer/>
    </div>
  );
};

export default Home;