import "./NavBar.css";
import React, { useEffect, useState } from "react";
import CategoryList from "../CategoryList/CategoryList";
import Logo from "../../assets/Images/logo.png";
import Usericon from "../../assets/Images/User.svg";
import Carticon from "../../assets/Images/Bag_alt.svg";
import Searchicon from "../../assets/Images/search.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useData } from "../../Data/DataFile";
import LogoutIcon from "@mui/icons-material/Logout";
import Badge from '@mui/material/Badge';

function NavBar() {
  const location = useLocation();
  const { products, Allcategory ,Cart} = useData();
  const navigate = useNavigate();
  const [token, setToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    } else {
      setToken("");
    }
  }, []);

  return (
    <div className="container">
      <div className="navbar text-White py-3">
        <div className="col col-lg-4 text-white text-start searchicon">
          <img
            src={Searchicon}
            alt="logo"
            width={"16px"}
            className="pb-1 me-1"
          />
        </div>
        <div
          className="col col-lg-4 text-center pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={Logo} alt="logo" className="logos" />
        </div>
        <div className="col col-lg-4 text-end navbarHeaderoption">
          {!token ? (
            <>
              <div>
                <small
                  className={`mx-2 pb-1 pe-1 pointer ${
                    location.pathname === "/login" ? "selectedNav" : ""
                  }`}
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  <img
                    src={Usericon}
                    alt="logo"
                    width={"16px"}
                    className="pb-1 me-1"
                  />
                  Login
                </small>
              </div>
              <div>
                <small
                  className={`mx-2 pb-1 pointer ${
                    location.pathname === "/register" ? "selectedNav" : ""
                  }`}
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Register
                </small>
              </div>
            </>
          ) : (
            ""
          )}
          <div>
          <Badge badgeContent={Cart.length} fontSize="small" color="error">
            <small
              className={`mx-2 pb-1 pe-1 pointer ${
                location.pathname === "/cart" ? "selectedNav" : ""
              }`}
              onClick={() => {
                if (localStorage.getItem("token")) {
                  navigate("/cart");
                } else {
                  navigate("/login");
                }
              }}
            >
              <img
                src={Carticon}
                alt="logo"
                width={"16px"}
                className="pb-1 me-1"
              />
              Cart
            </small>
          </Badge>
          </div>

          {token ? (
            <div>
              <small
                className={`mx-2 pb-1 pe-1 pointer`}
                onClick={() => {
                  localStorage.clear();
                  setToken("");
                }}
              >
                <LogoutIcon fontSize="small me-1"></LogoutIcon>
                SignOut
              </small>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <CategoryList />
    </div>
  );
}

export default NavBar;
