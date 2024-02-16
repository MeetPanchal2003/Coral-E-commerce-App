import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Carticon from "../../assets/Images/Bag_alt-1.svg";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import "./ProductList.css";
import { useNavigate } from "react-router-dom";
import { useData } from "../../Data/DataFile";
function ProductList({
  PID,
  imgSrc,
  productName,
  originalPrice,
  productsdetails,
  discountedPercentaze,
  productBrand,
}) {
  const { likeproduct, setlikeproduct } = useData();
  const navigate = useNavigate();
  return (
    <div>
      <article className="card">
        <div className="card__img">
          <img
            src={imgSrc}
            alt=""
            className="productimg pointer border"
            onClick={() => {
              navigate("/productdetails", {
                state: { value: productsdetails },
              });
              window.scroll(0, 0);
            }}
          />
        </div>
        <div className="card__name d-flex justify-content-between p-2">
          <div>
            {!likeproduct.includes(PID) ? (
              <FavoriteBorderOutlinedIcon
                className="likeandSearchicon pointer"
                onClick={() => {
                  setlikeproduct([...likeproduct, PID]);
                }}
              />
            ) : (
              <FavoriteOutlinedIcon
                className="likeandSearchicon pointer text-danger"
                onClick={() => {
                  const removeId =[PID]
                  const RemoveLike = likeproduct.filter(
                    (item) => !removeId.includes(item)
                  );

                  setlikeproduct(RemoveLike);
                }}
              />
            )}
            <SearchOutlinedIcon className="likeandSearchicon pointer" />
          </div>
          <div
            className="Shop_Now_Btn pointer"
            onClick={() => {
              navigate("/productdetails", {
                state: { value: productsdetails },
              });
              window.scroll(0, 0);
            }}
          >
            <img src={Carticon} alt="" srcset="" className="Shop_Now_icon" />{" "}
            Shop Now
          </div>
        </div>
        <div className="card_details p-2">
          <div className="card_Name bolder text-start">{productName}</div>
          <div className="card_Name d-flex justify-content-between">
            <div>{productBrand}</div>
            <div className="bolder d-flex">
              <div>
                <del>${originalPrice}</del>
              </div>
              <div className="ps-2 text-danger">
                $
                {originalPrice -
                  ((originalPrice * discountedPercentaze) / 100).toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ProductList;
