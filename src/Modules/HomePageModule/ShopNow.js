import React from "react";
import GirlImage from "../../assets/Images/shop-now-girl.svg";
import FlowerImage from "../../assets/Images/flower-pattern.svg";
import Button from "@mui/material/Button";
import './ShopNow.css'
function ShopNow() {
  return (
    <div className="MainSection">
        <img src={FlowerImage} alt="flower-Image" className="flowerImage" />

      <div className="container">
        <div className="row">
          <div className="col firstSection">
            <div className="">
              <div className="Firstsectionheader py-2">Collections</div>
              <div className="Firstsectioncontent text-capitalize py-2">
                you can explore ans shop many differnt collection from various
                barands here.
              </div>
              <div className="py-2">

              <Button variant="contained" >Shop Now</Button>
              </div>
            </div>
          </div>
          <div className="col secondSection">
            <img src={GirlImage} alt="shop-now-girl" className="girlImg img-fluid"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopNow;
