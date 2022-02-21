import React, { useState, useEffect } from "react";
import categories from "../../server/categories/index.get.json";
import "./Product.scss";
import allProducts from "../../server/products/index.get.json";
import Cart from "../Cart/Cart";
import { Dropdown } from "primereact/dropdown";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setProducts(allProducts);
  }, []);

  let sortedCategories = categories.sort((a, b) => {
    return a.order - b.order;
  });

  let dropdownOptions = sortedCategories.map((value, index) => {
    let options = {};
    options["label"] = value.name;
    options["value"] = value.id;
    return options;
  });

  const catogoriesType = () => {
    let sortedCategories = categories.sort((a, b) => {
      return a.order - b.order;
    });
    let renderCategories = sortedCategories.map((value) => {
      return (
        <div
          className="product-category-text"
          key={value.id}
          onClick={() => {
            let filteredArray = allProducts.filter((product) => {
              return value.id === product.category;
            });
            setProducts(filteredArray);
          }}
        >
          {value.name}
        </div>
      );
    });
    return renderCategories;
  };

  const renderProducts = () => {
    let productsToDisplay = products.map((value) => {
      let imageUrl = require(`../../../src${value.imageURL}`);
      return (
        <div className="product-main-display-container" key={value.id}>
          <div className="product-heading-text">{value.name}</div>
          <div className="image-description-container">
            <img src={imageUrl} alt="" className="product-image" />
            <div>
              <div className="product-description-text">
                {value.description}
              </div>
              <div
                className="buy-now-button-mobile"
                onClick={() => {
                  setIsOpen(true);
                  setCart(value);
                }}
              >{`Buy Now @ MRP RS.${value.price}`}</div>
            </div>
          </div>
          <div
            className="buy-now-button"
            onClick={() => {
              setIsOpen(true);
              setCart(value);
            }}
          >{`Buy Now @ MRP RS.${value.price}`}</div>
          <div className="product-card-container">
            <div style={{ padding: "10px" }}>{`MRP Rs.${value.price}`}</div>
            <div
              className="buy-now-text"
              onClick={() => {
                setIsOpen(true);
                setCart(value);
              }}
            >
              Buy Now
            </div>
          </div>
          <div
            style={{ borderBottom: "1px dashed grey", paddingTop: "10px" }}
          ></div>
        </div>
      );
    });

    if (productsToDisplay.length === 0) {
      productsToDisplay = <div>No Product in this category</div>;
    }
    return productsToDisplay;
  };

  return (
    <div style={{ display: "flex", margin: "0 5vw" }}>
      {isOpen && <Cart item={cart} close={() => setIsOpen(false)} />}

      <div className="product-page-categrory-width">{catogoriesType()}</div>
      <div className="product-page-product-width">
        <div className="product-dropdown">
          <Dropdown
            id="categoryDropdown"
            value={selectedItem}
            options={dropdownOptions}
            onChange={(e) => {
              setSelectedItem(e.value);
              let filteredArray = allProducts.filter((product) => {
                return e.value === product.category;
              });
              setProducts(filteredArray);
            }}
            placeholder="Select Category"
          />
        </div>
        <div className="product-display-container">{renderProducts()}</div>
      </div>
    </div>
  );
}
