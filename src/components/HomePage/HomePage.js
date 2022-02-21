import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import categories from "../../server/categories/index.get.json";
import "./Homepage.scss";

const HomePage = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  let offers = [
    {
      id: 0,
      image: require("../../static/images/offers/offer1.jpg"),
    },
    {
      id: 1,
      image: require("../../static/images/offers/offer2.jpg"),
    },
    {
      id: 2,
      image: require("../../static/images/offers/offer3.jpg"),
    },
    {
      id: 3,
      image: require("../../static/images/offers/offer4.jpg"),
    },
    {
      id: 4,
      image: require("../../static/images/offers/offer5.jpg"),
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      index === 4 ? setIndex(0) : setIndex(index + 1);
    }, 8000);
  }, [index]);

  const renderCategory = (category, index) => {
    let imageUrl = require(`../../../src${category.imageUrl}`);
    let jsx = (
      <div
        style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}
        className="homepage-category-container"
        key={index}
      >
        <img src={imageUrl} alt="" className="homepage-image" />
        <div style={{ textAlign: "center", width: "75%" }}>
          <h2> {category.name}</h2>
          <div>{category.description}</div>
          <button
            className="homepage-category-button"
            onClick={() => navigate("/product")}
          >{`Explore ${category.key}`}</button>
        </div>
      </div>
    );

    return jsx;
  };

  const renderAllCategories = () => {
    let sortedCategories = categories.sort((a, b) => {
      return a.order - b.order;
    });
    let JSX = sortedCategories.slice(1).map((value, index) => {
      return renderCategory(value, index);
    });
    return JSX;
  };

  const creatingDots = () => {
    let jsx = offers.map((value, i) => {
      return (
        <div
          style={{
            backgroundColor: index === i ? "black" : "grey",
          }}
          className="homepage-dots"
          onClick={() => {
            setIndex(i);
          }}
          key={i}
        ></div>
      );
    });

    return jsx;
  };

  return (
    <div style={{ margin: "0 5vw" }}>
      <div className="homepage-boxshadow">
        <img src={offers[index].image} alt="" style={{ width: "100%" }} />
        <div className="homepage-dots-slideshow ">{creatingDots()}</div>
      </div>

      {renderAllCategories()}
    </div>
  );
};

export default HomePage;
