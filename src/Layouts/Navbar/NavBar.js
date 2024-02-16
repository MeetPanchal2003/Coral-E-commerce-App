import "./NavBar.css";
import React,{useEffect, useState} from "react";
import CategoryList from "../CategoryList/CategoryList";
import Logo from "../../assets/Images/logo.png";
import Usericon from "../../assets/Images/User.svg";
import Carticon from "../../assets/Images/Bag_alt.svg";
import Searchicon from "../../assets/Images/search.svg";
import { useLocation, useNavigate } from "react-router-dom";
function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [token,setToken] = useState("");

  useEffect(()=>{
    if(localStorage.getItem("token")){
      setToken(localStorage.getItem("token"))
    }else{
      setToken("")
    }
  },[])

  return (
    <div className="container">
      <div className="navbar text-White py-3">
        <div className="col col-lg-4 text-white text-start">
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
          <img src={Logo} alt="logo" />
        </div>
        <div className="col col-lg-4 text-end">
          {!token ? (
            <>
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
            </>
          ) : (
            ""
          )}
          <small
            className={`mx-2 pb-1 pe-1 pointer ${
              location.pathname === "/cart" ? "selectedNav" : ""
            }`}
            onClick={()=>{
              navigate("/cart")
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

          {token ? (
          <small
            className={`mx-2 pb-1 pe-1 pointer ${
              location.pathname === "/cart" ? "selectedNav" : ""
            }`}
            onClick={()=>{
              localStorage.clear()
              setToken("")
            }}
          >
            <img
              src={Carticon}
              alt="logo"
              width={"16px"}
              className="pb-1 me-1"
            />
            SignOut
          </small>
          ):""}
        </div>
      </div>
      <CategoryList />
    </div>
  );
}

export default NavBar;