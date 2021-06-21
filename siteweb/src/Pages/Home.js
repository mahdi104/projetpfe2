import React from "react";
import Carrousel from "../Component/Carroussel/Carroussel";
import Presentation from "../Component/Presentation/Presentation";
// import Footer from "../Component/Footer/Footer";


const Home = () => {
  return (
    <div>
      <Carrousel />
     <Presentation/>
      {/* <Footer/> */}
    </div>
  );
};

export default Home;