import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import "./Cart.scss";
import Header from "../Header/Header";

const Cart = (props) => {
  const [number, setNumber] = useState(1);

  return (
    <Dialog visible={true} showHeader={false} id="cart">
      {props.item ? (
        <>
          <div className="header-cart">
            <Header item={1} />
          </div>
          <div className="main-cart-container">
            <div className="cart-header-container">
              <div>
                <b>My Cart</b>
                {` (1 item)`}
              </div>
              <i className="pi pi-times" onClick={() => props.close()}></i>
            </div>
            <div className="cart-tab-view">
              <b>My Cart</b>
              {` (1 item)`}
            </div>
            <div className="cart-banner">
              <img
                src={require(`../../../src${props.item.imageURL}`)}
                alt=""
                style={{ height: "80%", aspectRatio: 1 }}
              />
              <div>
                <div style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {props.item.name}
                </div>
                <div className="cart-item-header">
                  <div className="cart-item-details">
                    <i
                      className="pi pi-minus-circle"
                      onClick={() => {
                        if (number !== 1) {
                          setNumber(number - 1);
                        }
                      }}
                    ></i>
                    {number}
                    <i
                      className="pi pi-plus-circle"
                      onClick={() => {
                        setNumber(number + 1);
                      }}
                    ></i>
                    x Rs.{props.item.price}
                  </div>
                  <div>Rs.{number * props.item.price}</div>
                </div>
              </div>
            </div>

            <div className="cart-cheaper-text">
              <img
                src={require(`../../static/images/lowest-price.png`)}
                alt=""
                style={{ height: "100%" }}
              />
              <div>You won't find it cheaper anywhere</div>
            </div>
            <div className="cart-fix-button-container">
              Promo Code can be applied on payment page
              <button
                className="cart-button"
                onClick={() => props.close()}
              >{`Proceed to checkout  Rs.${number * props.item.price}`}</button>
            </div>
          </div>
        </>
      ) : (
        <div>
          <div className="cart-header-no-item">
            <div>
              <b>My Cart</b>
            </div>
            <i className="pi pi-times" onClick={() => props.close()}></i>
          </div>
          <div className="main-cart-container cart-no-item">
            <div>
              <b>No items in your cart</b>
            </div>
            <div> Your favourite items are just a click away</div>
          </div>
          <div className="cart-fix-button-container">
            <button className="cart-button" onClick={() => props.close()}>
              Start shopping
            </button>
          </div>
        </div>
      )}
    </Dialog>
  );
};

export default Cart;
