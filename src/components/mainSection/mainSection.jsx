import React, { useState } from "react";
import ButtonsNav from "../buttonNav/buttonNav";
import Card from "../card/card";
import { MenuItems } from "../../data/data";
import Bag from "../bag/bag"; // Підключаємо компонент кошика
import "./mainSection.css";

export default function MainComponent() {
  const [selectedType, setSelectedType] = useState("Burger");
  const [cartItems, setCartItems] = useState([]); 


  const handleButtonClick = (type) => {
    setSelectedType(type);
  };

  const handleCardButtonClick = (item) => {
    const itemExistsInCart = cartItems.some(cartItem => cartItem.name === item.name);
  
    if (itemExistsInCart) {
      const updatedCartItems = cartItems.map(cartItem =>
        cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  return (
    <section className="main-section">
    <div className="buttons-container">
    <ButtonsNav onClick={handleButtonClick}/>
    </div>
      <div className="container main-section__container">
        <aside className="main-section__bag-side">
          <Bag cartItems={cartItems} setCartItems={setCartItems} />
        </aside>
        <div className="main-section__main-side">
          <h2 className="main-section__title">{selectedType}</h2>
          <div className="main-section__cards-container">
            {MenuItems.filter(item => !selectedType || item.type === selectedType).map(item => (
              <Card key={item.name} item={item} onButtonClick={() => handleCardButtonClick(item)} type={selectedType} />
            ))}
          </div>
      </div>
      </div>
    </section>
  );
}