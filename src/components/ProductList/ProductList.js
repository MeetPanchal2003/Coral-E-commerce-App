import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import Carticon from "../../assets/Images/Bag_alt.svg";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Carticon from "../../assets/Images/Bag_alt-1.svg";
import Productimg from "../../assets/Images/p1.png";
import "./ProductList.css";
import { useNavigate } from "react-router-dom";
function ProductList({ imgSrc, productName, originalPrice,productsdetails, discountedPercentaze }) {
  const navigate = useNavigate();
  return (
    <div>
      <article className="card">
        <div className="card__img">
          <img src={imgSrc} alt="" className="productimg pointer border" onClick={()=>{
            navigate("/productdetails", { state: { value: productsdetails } });
            window.scroll(0,0)
          }}/>
        </div>
        <div className="card__name d-flex justify-content-between p-2">
          <div>
            <FavoriteBorderOutlinedIcon className="likeandSearchicon pointer" />
            <SearchOutlinedIcon className="likeandSearchicon pointer" />
          </div>
          <div className="Shop_Now_Btn pointer">
            <img src={Carticon} alt="" srcset="" className="Shop_Now_icon" />{" "}
            Shop Now
          </div>
        </div>
        <div className="card_details p-2">
          <div className="card_Name bolder text-start">{productName}</div>
          <div className="card_Name d-flex justify-content-between">
            <div>Classics</div>
            <div className="bolder d-flex">
              <div><del>${originalPrice}</del></div>
              <div className="ps-2 text-danger">${originalPrice-((originalPrice*discountedPercentaze)/100).toFixed(2)}</div>
              </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ProductList;
