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

function Cart() {
  const { Data, AddData } = useData();
  console.log(Data, "list");
  const [TotalAmount, setTotalAmount] = useState(0);
  // const [cartList, setcartList] = useState([
  //   {
  //     img_Product: Productimg,
  //     product_Name: "Tshirt",
  //     product_Prize: "$200",
  //     product_Description: "This thsirt was amazing ",
  //   },
  //   {
  //     img_Product: Productimg,
  //     product_Name: "Tshirt",
  //     product_Prize: "$200",
  //     product_Description: "This thsirt was amazing ",
  //   },
  //   {
  //     img_Product: Productimg,
  //     product_Name: "Tshirt",
  //     product_Prize: "$200",
  //     product_Description: "This thsirt was amazing ",
  //   },
  //   {
  //     img_Product: Productimg,
  //     product_Name: "Tshirt",
  //     product_Prize: "$200",
  //     product_Description: "This thsirt was amazing ",
  //   },
  //   {
  //     img_Product: Productimg,
  //     product_Name: "Tshirt",
  //     product_Prize: "$200",
  //     product_Description: "This thsirt was amazing ",
  //   },
  // ]);

  const handleRemoveCart = (id) => {
    const PId = [id];
    const RemoveData = Data.filter((item) => !PId.includes(item.id));
    AddData(RemoveData);
    const DecrisePrice = RemoveData.reduce((total, product) => {
      return total + product.price;
    }, 0);
    setTotalAmount(DecrisePrice);
  };

  useEffect(() => {
    if (Data.length > 0) {
      const totalPrice = Data.reduce((total, product) => {
        return total + product.price;
      }, 0);
      setTotalAmount(totalPrice);
    }
  }, [TotalAmount]);

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
                  Total Products : {Data.length}
                </div>
              </div>
              {Data.length > 0 ? (
                <div className="">
                  {Data.map((item, index) => {
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
                            index === Data.length - 1 ? "" : "borderBottom"
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
                                onClick={() => {
                                  NumberOfProduct = NumberOfProduct - 1;
                                }}
                              >
                                <RemoveOutlinedIcon />
                              </Button>
                            </div>
                          </div>
                          <div className="col col-lg-4 col-6 pb-3 text-end">
                            Prize : {item.price}
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
                        >
                          Go To SHopping
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="d-flex border-top justify-content-end">
                {/* <div className="ShoppingCart">Shopping Cart</div> */}
                <div className="ShoppingCart">
                  Total Amount : ${TotalAmount}
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
