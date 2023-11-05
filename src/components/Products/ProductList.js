import React, { useContext, useState } from "react";
import Styles from "./ProductList.module.css";
import { ProductsContext } from "../../contexts/ProductsContextProvider";
import Product from "./Product";
import loading from "../../assets/icons/loading.svg";

const ProductList = () => {
  const products = useContext(ProductsContext);
  const options = ["men's clothing", "women's clothing", "jewelery", "electronics"];
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (option) => {
    if (selectedFilters.includes(option)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== option));
    } else {
      setSelectedFilters([...selectedFilters, option]);
    }
  };

  const getProducts = () => {
    return products.filter((item) => selectedFilters.length === 0 || selectedFilters.includes(item.category));
  };

  return (
    <>
      <div className={Styles.filters}>
        <h3>Filter</h3>
        {options.map((option, index) => (
          <label key={index}>
            <input
              type="checkbox"
              checked={selectedFilters.includes(option)}
              onChange={() => handleFilterChange(option)}
            />
            {option}
          </label>
        ))}
      </div>
      <div className={Styles.container}>
        {products.length === 0 &&
        <img src={loading} alt="tt" style={{ width: "100%" }} />
        }
        {getProducts().map((item) => (
          <Product key={item.id} productData={item} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
