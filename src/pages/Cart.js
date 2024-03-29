import React, { useEffect, useState } from "react";
import NavBar from "../Layouts/Navbar/NavBar";
import Footer from "../Layouts/Footer/Footer";
import "./Cart.css";
import CloseIcon from "@mui/icons-material/Close";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { Button } from "@mui/material";
import { useData } from "../Data/DataFile";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";
function Cart() {
  const navigate = useNavigate();
  const { Cart, AddCart } = useData();
  const [TotalAmount, setTotalAmount] = useState(0);

  const handleRemoveCart = (id) => {
    const PId = [id];
    const RemoveData = Cart.filter((item) => !PId.includes(item.id));
    AddCart(RemoveData);
    const DecrisePrice = RemoveData.reduce((total, product) => {
      return total + product.price;
    }, 0);
    setTotalAmount(DecrisePrice);
  };

  useEffect(() => {
    if (Cart?.length > 0) {
      const totalPrice = Cart?.reduce((total, product) => {
        const DiscountedAmount =
          total +
          (product.price - (product.price * product.discountPercentage) / 100);
        return DiscountedAmount;
      }, 0).toFixed(2);
      setTotalAmount(totalPrice);
    }
  }, [Cart]);

  return (
    <div>
      <div className="firstSectionBackground">
        <NavBar />
        <div>
          <div className="container ShoppingCart_Section">
            <div className="ShoppingCart_Box">
              <div className="borderBottom d-flex justify-content-between">
                <div className="ShoppingCart">Shopping Cart</div>
                <div className="ShoppingCart">
                  Total Products : {Cart.length}
                </div>
              </div>
              {Cart.length > 0 ? (
                <div className="">
                  {Cart.map((item, index) => {
                    var NumberOfProduct = 1;
                    return (
                      <div>
                        <div className="text-end px-3 pt-3">
                          <CloseIcon
                            className="pointer"
                            onClick={() => {
                              handleRemoveCart(item?.id);
                            }}
                          />
                        </div>
                        <div
                          className={`row p-3 m-3 ${
                            index === Cart.length - 1 ? "" : "borderBottom"
                          }`}
                        >
                          <div className="col col-lg-3 pb-3 col-12 text-start">
                            <img
                              src={item.thumbnail}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="col col-lg-5 col-6 pb-3 text-start">
                            <h4>{item.title}</h4>
                            <small>{item.description}</small>
                            <div className="d-flex">
                              <Button
                                className="border"
                                variant="outlined-contained"
                                onClick={() => {
                                  NumberOfProduct = NumberOfProduct + 1;
                                }}
                              >
                                <AddOutlinedIcon />
                              </Button>
                              <Button className="border" disabled>
                                {NumberOfProduct}
                              </Button>
                              <Button
                                className="border"
                                variant="outlined-contained"
                                onClick={() => {
                                  NumberOfProduct = NumberOfProduct - 1;
                                }}
                              >
                                <RemoveOutlinedIcon />
                              </Button>
                            </div>
                          </div>
                          <div className="col col-lg-4 col-6 pb-3 text-end">
                            {/* Prize : {item.price} */}

                            <div className="text-danger bolder">
                              <span className="bolder">Discount :</span> -
                              {item?.discountPercentage}%
                            </div>
                            <small>
                              <span className="bolder">M.R.P :</span>{" "}
                              <del>${item?.price}</del>{" "}
                              <span>
                                $
                                {item?.price -
                                  (
                                    (item?.price * item?.discountPercentage) /
                                    100
                                  ).toFixed(2)}
                              </span>{" "}
                            </small>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="">
                  <div>
                    <div className={`row p-3 m-3 text-center`}>
                      <div className="text-grey text-capitalize pb-2">
                        you dont have any product in cart Go to shopping add to
                        cart
                      </div>
                      <div>
                        <Button
                          variant="outlined-contained"
                          className="border mt-2"
                          startIcon={<ShoppingCartOutlinedIcon />}
                          onClick={() => {
                            navigate("/allproducts");
                            window.scroll(0, 0);
                          }}
                        >
                          Go To Shopping
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="d-flex border-top justify-content-between">
                <div className="ShoppingCart">
                  <Button
                    variant="outlined-contained"
                    className="border bg-dark text-white"
                    startIcon={<ShoppingCartOutlinedIcon />}
                    onClick={() => {
                      navigate("/allproducts");
                      window.scroll(0, 0);
                    }}
                  >
                    Countinue Shopping
                  </Button>
                </div>
                {/* <div className="ShoppingCart">Shopping Cart</div> */}
                <div className="ShoppingCart">
                  Total Amount Pay : ${TotalAmount}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
