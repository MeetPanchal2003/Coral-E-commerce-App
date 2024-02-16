import React from "react";
import "./SeeCollection.css";
import ZaraBackground from "../../assets/Images/Zara_blur_img.png";
import Zaralogo from "../../assets/Images/Zara_Logo.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function SeeCollection() {
  const navigate = useNavigate();
  return (
    <div className="seeCollection">
      <div className="container">
        <img
          src={ZaraBackground}
          alt="Zara-bg"
          className="zaraBackground"
          srcset=""
        />
        <div className="row text-white collectionBlock">
          <div className="text-white col-lg-6">
          </div>
          <div className="text-white col-lg-6 pt-5">
            <div className="py-2">
                <img src={Zaralogo} alt="zara-logo" className="collection-logo"/>
            </div>
            <div className="collection-Content py-2">
            Lustrous yet understated. The new evening wear collection
            exclusively offered at the reopened Giorgio Armani boutique in Los
            Angeles.
            </div>
            <div className="py-2">
            <Button className="bg-white text-black collection_btn text-capitalize bolder" variant="contained" onClick={()=>{
              navigate("/allproducts");
              window.scroll(0,0)
            }}>See Collection</Button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeeCollection;
