import React from "react";
import "./CategoryList.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useData } from "../../Data/DataFile";

function CategoryList() {
  const navigate = useNavigate();
  const { products, Allcategory } = useData();
  const location = useLocation();
  return (
    <div
      className={
        location.pathname === "/login" || location.pathname === "/register"
          ? "d-none"
          : "CategoryList py-3"
      }
    >
      <ul className="text-black">
        <li>
          <small
            className="pointer text-capitalize"
            onClick={() => {
              navigate("/allproducts", {
                state: { category: "AllProduct" },
              });
              window.scroll(0, 0);
            }}
          >
            All Products
          </small>
        </li>

        {Allcategory.map((category, index) => {
          return (
            <li>
              <small
                className="pointer text-capitalize"
                onClick={() => {
                  navigate("/allproducts", {
                    state: { category: category },
                  });
                  window.scroll(0, 0);
                }}
              >
                {category}
              </small>
            </li>
          );
        })}
        {/* <li><small className='pointer'>Clothing & Shoes</small></li>
      <li><small className='pointer'>Home & Living</small></li>
      <li><small className='pointer'>Wedding & Party</small></li>
      <li><small className='pointer'>Toys & Entertainment</small></li>
      <li><small className='pointer'>Art & Collectibles</small></li>
      <li><small className='pointer'>Craft Supplies & Tools</small></li>
      <li><small className='pointer'>Jewelry & Accessories</small></li>
      <li><small className='pointer'>Clothing & Shoes</small></li>
      <li><small className='pointer'>Home & Living</small></li>
      <li><small className='pointer'>Wedding & Party</small></li>
      <li><small className='pointer'>Toys & Entertainment</small></li>
      <li><small className='pointer'>Art & Collectibles</small></li>
      <li><small className='pointer'>Craft Supplies & Tools</small></li> */}
      </ul>
    </div>
  );
}

export default CategoryList;
