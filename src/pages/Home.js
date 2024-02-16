import React from "react";
import NavBar from "../Layouts/Navbar/NavBar";
import Footer from "../Layouts/Footer/Footer";
import ShopNow from "../Modules/HomePageModule/ShopNow";
import Products from "../Modules/HomePageModule/Products";
import SeeCollection from "../Modules/HomePageModule/SeeCollection";
import "./Home.css"

function Home() {
  return (
    <div>
      <div className="firstSectionBackground">
        <NavBar />
        <ShopNow />
      </div>
      <Products/>
      <SeeCollection/>
      <Footer />
    </div>
  );
}

export default Home;
