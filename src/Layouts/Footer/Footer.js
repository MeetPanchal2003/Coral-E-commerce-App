import React from "react";
import Logo from "../../assets/Images/logo.png";
import Facebook from "../../assets/Images/facebook.svg";
import Tweeter from "../../assets/Images/twitter.svg";
import Linkdin from "../../assets/Images/linkedin.svg";
import Dribble from "../../assets/Images/dribbble.svg";
import Payment from "../../assets/Images/icons_payments.svg";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

function Footer() {

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="">
      <div className="">
        <div className="container">
          <div className="row MainSection">
            <div className="col col-lg-3 col-md-3 col-sm-3 col-6">
              <div className="pb-3">
                <img src={Logo} alt="corol-logo" />
              </div>
              <div className="py-2">
                <small>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </small>
              </div>
              <div className="pt-3">
                <ul>
                  <li>
                    <img src={Facebook} alt="Facebook" />
                  </li>
                  <li>
                    <img src={Tweeter} alt="Tweeter" />
                  </li>
                  <li>
                    <img src={Linkdin} alt="Linkdin" />
                  </li>
                  <li>
                    <img src={Dribble} alt="Dribble" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-3 col-md-3 col-sm-3 col-6 d-flex justify-content-center">
              <div>
                <div className="pointer bolder mb-3">CATALOG</div>
                <div className="pointer my-1">Necklaces</div>
                <div className="pointer my-1">hoodies</div>
                <div className="pointer my-1">Jewelry Box</div>
                <div className="pointer my-1">t-shirt</div>
                <div className="pointer my-1">jacket</div>
              </div>
            </div>
            <div className="col col-lg-3 col-md-3 col-sm-3 col-6 d-flex justify-content-center">
              <div>
                <div className="pointer bolder mb-3">ABOUT US</div>
                <div className="pointer my-1">Our Producers</div>
                <div className="pointer my-1">Sitemap</div>
                <div className="pointer my-1">FAQ</div>
                <div className="pointer my-1">About Us</div>
                <div className="pointer my-1">Terms & Conditions</div>
              </div>
            </div>
            <div className="col col-lg-3 col-md-3 col-sm-3 col-6 d-flex justify-content-center">
              <div>
                <div className="pointer bolder mb-3">CUSTOMER SERVICES</div>
                <div className="pointer my-1">Contact Us</div>
                <div className="pointer my-1">Track Your Order</div>
                <div className="pointer my-1">Product Care & Repair</div>
                <div className="pointer my-1">Book an Appointment</div>
                <div className="pointer my-1">Shipping & Returns</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Purpulebg py-2">
        <div className="container">
          <div className="row text-white">
            <div className="col text-start">
              <small className="pointer">© 2022 Coral , Inc.</small>
            </div>
            <div className="col text-center">
              <img src={Payment} alt="" srcset="" className="bottomCardimg"/>
            </div>
            <div className="col text-end">
              <small className="pointer" onClick={()=>scrollToTop()}>
                Scroll to top <ArrowUpwardOutlinedIcon />
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
