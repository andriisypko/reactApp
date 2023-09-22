import React from "react";
import Button from "../button/button";
import MyModal from "../deliveryModal/delModal";
import "./bag.css";
import Delivery from "../../images/delivery.svg";
import { useState } from "react";

export default function Bag({ cartItems, setCartItems }) {
  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(item);
      return;
    }

    const updatedCartItems = cartItems.map(cartItem =>
      cartItem.name === item.name ? { ...cartItem, quantity: newQuantity } : cartItem
    );
    setCartItems(updatedCartItems);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleRemoveItem = (item) => {
    const updatedCartItems = cartItems.filter(cartItem => cartItem.name !== item.name);
    setCartItems(updatedCartItems);
  };

  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
    return totalPrice.toFixed(2);
  };

  const shouldDisplayFreeDelivery = calculateTotalPrice() >= 50;


  return (
    <aside className="bag">
      <div className="bag__header" onClick={() => setIsCartVisible(!isCartVisible)}>
        <h2 className="bag__title">Shopping Cart</h2>
        <p className="bag__quantity"> {cartItems.reduce((totalQuantity, cartItem) => totalQuantity + cartItem.quantity, 0)}</p>
      </div>
      <div className={`bag__main ${isCartVisible ? 'oppen' : ''}`}>
        {cartItems.length === 0 ? (
          <p className="bag__empty-message">Shopping cart is empty &#128532;</p>
        ) : (
          cartItems.map(cartItem => (
            <div className="bag__container" key={cartItem.name}>
              <div className="bag__card">
                <img className="bag__img" src={cartItem.image} alt={cartItem.name} />
                <div className="bag__info-container">
                    <h2 className="bag__name">{cartItem.name.length > 12 ? cartItem.name.substring(0, 12) + '...' : cartItem.name}</h2>
                    <p className="bag__weight">{cartItem.weight || ""}</p>
                    <h2 className="bag__price">  {(cartItem.price * cartItem.quantity).toFixed(2)}$</h2>
                </div>
              </div>
              <div className="bag__btn-container">
                <button className="bag__minus-btn" onClick={() => handleQuantityChange(cartItem, cartItem.quantity - 1)}>-</button>
                <span className="bag__item-quantity">{cartItem.quantity}</span>
                <button className="bag__plus-btn" onClick={() => handleQuantityChange(cartItem, cartItem.quantity + 1)}>+</button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className={`bag__footer ${isCartVisible ? 'oppen' : ''}`}>
          {cartItems.length > 0 && (
            <div className="bag__footer-info">
              <h5 className="bag__footer-info-title">Total</h5>
              <h5 className="bag__footer-info-sum">{calculateTotalPrice()}$</h5>
            </div>
          )}
          {cartItems.length !== 0 && (
          <div className="bag__footer-btn">
          <Button buttonText="Make an order" initialColor="#FF7020" hoverColor="#FFAB08" textInitialColor="white" onClick={() => setIsModalOpen(true)} />
          </div>
          )}
          {shouldDisplayFreeDelivery && (
            <div className="bag__footer-free-delivery">
              <img src={Delivery} alt="Delivery" />
              <p className="bag__footer-free-deliver-text">Free delivery</p>
            </div>
          )}
      </div>
      <MyModal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </aside>
  );
}