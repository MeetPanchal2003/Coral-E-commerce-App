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
import { useNavigate, useLocation } from "react-router-dom";

function AllProduct() {
  const navigate = useNavigate();
  const location = useLocation();
  const getCaegory = location?.state?.category
    ? location.state.category
    : "AllProduct";
  console.log(location?.state?.category);
  const { products, Cart } = useData();
  const [DisplayData, setDisplayData] = useState([]);

  useEffect(() => {
    if (getCaegory !== "AllProduct") {
      const categoryvisedata = products.filter((item) =>
        getCaegory.includes(item.category)
      );
      setDisplayData(categoryvisedata);
    } else {
      setDisplayData(products);
    }
  }, [getCaegory,products]);

  return (
    <div>
      <div className="firstSectionBackground">
        <NavBar />
        <div>
          <div className="container ShoppingCart_Section">
            <div className="ShoppingCart_Box">
              <div className="borderBottom d-flex justify-content-between">
                <div className="ShoppingCart text-capitalize">{getCaegory === "AllProduct" ? "All Products" : getCaegory}</div>
              </div>
              {DisplayData.length > 0 ? (
                <div className="">
                  {DisplayData.map((item, index) => {
                    var NumberOfProduct = 1;
                    return (
                      <div>
                        <div
                          className={`row p-3 m-3 ${
                            index === Cart.length - 1 ? "" : "borderBottom"
                          }`}
                          onClick={() => {
                            navigate("/productdetails", {
                              state: { value: item },
                            });
                            window.scroll(0, 0);
                          }}
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
                            {/* <div className="d-flex">
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
                            </div> */}
                          </div>
                          <div className="col col-lg-4 col-6 pb-3 text-end">
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
                        No Products
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AllProduct;
