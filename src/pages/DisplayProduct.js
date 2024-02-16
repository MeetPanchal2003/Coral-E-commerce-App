import React, { useState } from "react";
import NavBar from "../Layouts/Navbar/NavBar";
import Footer from "../Layouts/Footer/Footer";
import "./Cart.css";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { Button } from "@mui/material";
import { useLocation ,useNavigate} from "react-router-dom";
import "./DisplayProduct.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useData } from "../Data/DataFile";

function DisplayProduct() {
  const navigate = useNavigate();
  const location = useLocation();
  const { Cart, AddCart , setPendingCart,likeproduct, setlikeproduct} = useData();
  const ProductAdd = location.state.value;

  const [cartList, setcartList] = useState(location.state.value);
  const [liked, setLiked] = useState(false);
  const [numberofProduct, setnumberofProduct] = useState(1);
  const [selectedimage, setselectedimage] = useState(
    location.state.value.thumbnail
  );
  console.log(Cart);

  const handleAddTocart = () => {
    if (localStorage.getItem("token")) {
      AddCart([...Cart, ProductAdd]);
    }else{
      navigate("/login")
      setPendingCart(ProductAdd)
      window.scroll(0,0)
    }
  };

  return (
    <div>
      <div className="firstSectionBackground">
        <NavBar />
        <div>
          <div className="container ShoppingCart_Section">
            <div className="ShoppingCart_Box">
              <div className="borderBottom d-flex justify-content-between">
                <div className="ShoppingCart">Product Details</div>
              </div>
              <div className="">
                <div>
                  <div className={`row p-3 m-3 `}>
                    <div className="col col-lg-12 d-flex pb-3 col-12 text-start justify-content-center">
                      <img
                        src={selectedimage}
                        alt=""
                        className="img-fluid displayimagesize"
                      />
                    </div>
                    <div className="border-top  py-3 border-bottom my-2">
                      <div className="d-flex overflow-x-auto imagelist justify-content-around">
                        {cartList.images.map((imgee) => {
                          return (
                            <img
                              src={imgee}
                              alt=""
                              onClick={() => {
                                setselectedimage(imgee);
                              }}
                              className="img-fluid px-2 pointer"
                            />
                          );
                        })}
                      </div>
                    </div>
                    <div className="col col-lg-12 col-6 pt-3 text-start">
                      <h4>{cartList?.title}</h4>
                      <small>{cartList?.description}</small>
                      <div className="d-flex py-3">
                        <Button
                          className="border NumberofProductBtn"
                          size="small"
                          onClick={() => {
                            setnumberofProduct(numberofProduct + 1);
                          }}
                        >
                          <AddOutlinedIcon />
                        </Button>
                        <Button className="border text-black" disabled>
                          {numberofProduct}
                        </Button>
                        <Button
                          className="border NumberofProductBtn"
                          onClick={() => {
                            if (numberofProduct > 1) {
                              setnumberofProduct(numberofProduct - 1);
                            }
                          }}
                        >
                          <RemoveOutlinedIcon />
                        </Button>
                      </div>
                    </div>
                    <div className="col col-lg-12 col-6 pb-3">
                      <div className="text-danger bolder">
                        <span className="bolder">Discount :</span> -
                        {cartList?.discountPercentage}%
                      </div>
                      <small>
                        <span className="bolder">M.R.P :</span>{" "}
                        <del>${cartList?.price}</del>{" "}
                        <span>
                          $
                          {cartList?.price -
                            (
                              (cartList?.price * cartList?.discountPercentage) /
                              100
                            ).toFixed(2)}
                        </span>{" "}
                      </small>
                    </div>
                    <div className="col col-lg-12 col-6 pb-3">
                      {likeproduct.includes(cartList.id) ? (
                        <FavoriteOutlinedIcon
                          className="me-3 text-danger"
                          onClick={() => {
                            const removeId =[cartList.id]
                            const RemoveLike = likeproduct.filter(
                              (item) => !removeId.includes(item)
                            );
          
                            setlikeproduct(RemoveLike);
                          }}
                        />
                      ) : (
                        <FavoriteBorderOutlinedIcon
                          className="me-3 "
                          onClick={() => {
                            setlikeproduct([...likeproduct, cartList.id]);
                          }}
                        />
                      )}
                      <Button
                        className=""
                        variant="contained"
                        onClick={() => {
                          handleAddTocart();
                        }}
                        startIcon={<ShoppingCartOutlinedIcon />}
                      >
                        Add Cart
                      </Button>
                    </div>
                    <div className="row border-top">
                      <div className="border my-3">
                        <div className="py-2 bolder border-bottom">
                          Product details
                        </div>
                        <div className="py-1 ">
                          <small>Product Name : {cartList?.title}</small>
                        </div>
                        <div className="py-1 ">
                          <small>Brand : {cartList?.brand}</small>
                        </div>
                        <div className="py-1 ">
                          <small>Details : {cartList?.description}</small>
                        </div>
                        <div className="py-1 ">
                          <small>Rating : {cartList?.rating}</small>
                        </div>
                        <div className="py-1 ">
                          <small>Stock : {cartList?.stock}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="d-flex border-top justify-content-end">
                <div className="ShoppingCart">Shopping Cart</div>
                <div className="ShoppingCart">Total Amount : ${200*cartList.length}</div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DisplayProduct;
