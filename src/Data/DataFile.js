import React, { createContext, useContext, useState ,useEffect} from 'react';

const DataContext = createContext();

export const DataFile = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [Allcategory, setAllCategory] = useState([]);
  const [Cart, setCart] = useState([]);
  const [likeproduct, setlikeproduct] = useState([]);
  const [PendingCart, setPendingCart] = useState();

  const getAllProducts = () => {
    fetch("https://dummyjson.com/products?limit=200")
      .then((res) => res.json())
      .then((json) => {
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
          "womens-shoes",
          "mens-shoes",
          "mens-watches",
          "womens-watches",
          "womens-bags",
          "womens-jewellery",
          "sunglasses",
        ];

        const CATEGORY = json.filter((item) => categories.includes(item));
        setAllCategory(CATEGORY);
      });
  };

  useEffect(() => {
    getAllProducts()
    getAllCategory()
  }, []);

  const AddCart = (value) => {
    setCart(value);
  };

  return (
    <DataContext.Provider value={{products, setProducts,Allcategory, setAllCategory, Cart, AddCart ,PendingCart, setPendingCart,likeproduct, setlikeproduct}}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
