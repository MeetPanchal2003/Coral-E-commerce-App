import React from 'react'
import "./CategoryList.css"
import { useLocation,useNavigate } from "react-router-dom";

function CategoryList() {
  const location = useLocation();
  return (
    <div className={location.pathname === "/login" || location.pathname === "/register" ? "d-none" :"CategoryList py-3"}>
      <ul className='text-black'>
      <li><small className='pointer'>Jewelry & Accessories</small></li>
      <li><small className='pointer'>Clothing & Shoes</small></li>
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
      <li><small className='pointer'>Craft Supplies & Tools</small></li>
    </ul>
    </div>
  )
}

export default CategoryList
