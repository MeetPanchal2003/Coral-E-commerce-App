import React, { useEffect, useState } from "react";
import ProductList from "../../components/ProductList/ProductList";
import Button from "@mui/material/Button";
import "./Products.css";
import { useData } from "../../Data/DataFile";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { useNavigate } from "react-router-dom";
function Products() {
  const { products, Allcategory } = useData();
  const navigate = useNavigate();

  // const [products, setProducts] = useState([]);
  const [Displayproducts, setDisplayproducts] = useState(products);
  const [ProductsCategory, setProductsCategory] = useState([]);
  const [SelectCategory, setSelectCategory] = useState("");

  const getAllCategory = () => {
        const categories = [
          "mens-shirts",
          "tops",
          "womens-dresses",
          "womens-bags"
        ];

        const Grosary = Allcategory?.filter((item) => categories.includes(item));
        setProductsCategory(Grosary);
      
  };

  const SelectedCategory = (select) => {
    const Grosary = products.filter((item) => select.includes(item.category));
    setDisplayproducts(Grosary);
    setSelectCategory(select);
  };

  useEffect(() => {
    getAllCategory();
    setDisplayproducts(products)
  }, [Allcategory,products]);

  return (
    <div className="MainSection">
      <div className="container text-center">
        <h1>New Product</h1>
        <div className="row d-flex justify-content-between py-3">
          <div className="d-flex col align-items-center align-items-center CategoryList">
            <div
              className={`me-3 pointer text-capitalize ${
                SelectCategory === "" ? "bolder selectedNav" : ""
              } `}
              onClick={() => {
                setDisplayproducts(products);
                setSelectCategory("");
              }}
            >
              All Products
            </div>
            {ProductsCategory.slice(0, 5).map((category, index) => {
              return (
                <div
                  className={`me-3 pointer text-capitalize ${
                    SelectCategory === category ? "bolder selectedNav" : ""
                  } `}
                  onClick={() => {
                    SelectedCategory(category);
                  }}
                >
                  {category}
                </div>
              );
            })}
            {/* <div className="me-3 pointer">Hoodies</div>
            <div className="me-3 pointer">Jacket</div> */}
          </div>
          <div className="col col-4 align-items-center text-end">
            <Button
              className="PurpuleButton"
              startIcon={<FilterAltOutlinedIcon />}
              variant="contained"
              onClick={()=>{
                navigate("/allproducts");
                window.scroll(0,0)
              }}
            >
              Filter
            </Button>
          </div>
        </div>
        <div className="row">
          {Displayproducts.slice(0, 8).map((product, index) => (
            <div className="col products col-lg-3 col-md-4 col-sm-6 col-12">
              <ProductList
              PID={product.id}
                imgSrc={product.thumbnail}
                productName={product.title}
                originalPrice={product.price}
                productsdetails={product}
                discountedPercentaze={product.discountPercentage}
                productBrand={product.brand}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
