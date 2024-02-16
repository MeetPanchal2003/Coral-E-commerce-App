import React, { useEffect, useState } from "react";
import ProductList from "../../components/ProductList/ProductList";
import Button from "@mui/material/Button";
import "./Products.css";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
function Products() {
  // const products = [
  //   {
  //     imgSrc: "https://i.postimg.cc/8PkwdTYd/image.png",
  //     productName: "Autochthonous black cherries of the country",
  //     description:
  //       "The cherry is of a small caliber and a dark crimson color...",
  //     originalPrice: "€1.50/kg",
  //     discountedPrice: "https://ruben.soy/subgrid/cherries.webp",
  //   },
  //   {
  //     imgSrc: "https://i.postimg.cc/8PkwdTYd/image.png",
  //     productName: "Autochthonous black cherries of the country",
  //     description:
  //       "The cherry is of a small caliber and a dark crimson color...",
  //     originalPrice: "€1.50/kg",
  //     discountedPrice: "https://ruben.soy/subgrid/cherries.webp",
  //   },
  //   {
  //     imgSrc: "https://i.postimg.cc/8PkwdTYd/image.png",
  //     productName: "Autochthonous black cherries of the country",
  //     description:
  //       "The cherry is of a small caliber and a dark crimson color...",
  //     originalPrice: "€1.50/kg",
  //     discountedPrice: "https://ruben.soy/subgrid/cherries.webp",
  //   },
  //   {
  //     imgSrc: "https://i.postimg.cc/8PkwdTYd/image.png",
  //     productName: "Autochthonous black cherries of the country",
  //     description:
  //       "The cherry is of a small caliber and a dark crimson color...",
  //     originalPrice: "€1.50/kg",
  //     discountedPrice: "https://ruben.soy/subgrid/cherries.webp",
  //   },
  //   {
  //     imgSrc: "https://i.postimg.cc/8PkwdTYd/image.png",
  //     productName: "Autochthonous black cherries of the country",
  //     description:
  //       "The cherry is of a small caliber and a dark crimson color...",
  //     originalPrice: "€1.50/kg",
  //     discountedPrice: "https://ruben.soy/subgrid/cherries.webp",
  //   },
  //   {
  //     imgSrc: "https://i.postimg.cc/8PkwdTYd/image.png",
  //     productName: "Autochthonous black cherries of the country",
  //     description:
  //       "The cherry is of a small caliber and a dark crimson color...",
  //     originalPrice: "€1.50/kg",
  //     discountedPrice: "https://ruben.soy/subgrid/cherries.webp",
  //   },
  //   {
  //     imgSrc: "https://i.postimg.cc/8PkwdTYd/image.png",
  //     productName: "Autochthonous black cherries of the country",
  //     description:
  //       "The cherry is of a small caliber and a dark crimson color...",
  //     originalPrice: "€1.50/kg",
  //     discountedPrice: "https://ruben.soy/subgrid/cherries.webp",
  //   },
  //   {
  //     imgSrc: "https://i.postimg.cc/8PkwdTYd/image.png",
  //     productName: "Autochthonous black cherries of the country",
  //     description:
  //       "The cherry is of a small caliber and a dark crimson color...",
  //     originalPrice: "€1.50/kg",
  //     discountedPrice: "https://ruben.soy/subgrid/cherries.webp",
  //   },
  //   // Add other product objects here
  // ];

  const [products, setProducts] = useState([]);
  const [Displayproducts, setDisplayproducts] = useState([]);
  const [ProductsCategory, setProductsCategory] = useState([]);
  const [SelectCategory, setSelectCategory] = useState("");
  const getAllProducts = () => {
    fetch("https://dummyjson.com/products?limit=200")
      .then((res) => res.json())
      .then((json) => {
        // debugger
        console.log(json.products);
        const categories = [
          "mens-shirts",
          "tops",
          "womens-dresses",
          "womens-shoes",
          "mens-shoes",
          "mens-watches",
          "womens-watches",
          "womens-bags",
          "womens-jewellery",
          "sunglasses",
        ];
        const Grosary = json.products.filter((item) =>
          categories.includes(item.category)
        );
        setProducts(Grosary);
        setDisplayproducts(Grosary);
      });
  };

  const getAllCategory = () => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        const categories = [
          "mens-shirts",
          "tops",
          "womens-dresses",
          // "womens-shoes",
          // "mens-shoes",
          // "mens-watches",
          // "womens-watches",
          "womens-bags",
          // "womens-jewellery",
          // "sunglasses"
        ];

        const Grosary = json.filter((item) => categories.includes(item));
        setProductsCategory(Grosary);
      });
  };

  const SelectedCategory = (select) => {
    const Grosary = products.filter((item) => select.includes(item.category));
    setDisplayproducts(Grosary);
    setSelectCategory(select);
  };

  // const getAllProducts=()=>{
  //   fetch('https://dummyjson.com/products')
  //           .then(res=>res.json())
  //           .then(json=>setProducts(json.products))
  // }

  useEffect(() => {
    getAllProducts();
    getAllCategory();
  }, []);

  return (
    <div className="MainSection">
      <div className="container text-center">
        <h1>New Product</h1>
        <div className="row d-flex justify-content-between py-3">
          <div className="d-flex col align-items-center">
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
          <div className="col text-end">
            <Button
              className="PurpuleButton"
              startIcon={<FilterAltOutlinedIcon />}
              variant="contained"
            >
              Filter
            </Button>
          </div>
        </div>
        <div className="row">
          {Displayproducts.slice(0, 8).map((product, index) => (
            <div className="col products col-lg-3">
              <ProductList
                imgSrc={product.thumbnail}
                productName={product.title}
                originalPrice={product.price}
                productsdetails={product}
                discountedPercentaze={product.discountPercentage}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
