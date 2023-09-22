import { useState, useEffect } from "react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MenuItems } from "../../data/data";
import Wok from "../../images/wok.svg"
import Burger from "../../images/burger.svg"
import Snacks from "../../images/snack.svg"
import Pizza from "../../images/pizza.svg"
import Shawarma from "../../images/kebab.svg"
import HotDog from "../../images/hotDogs.svg"
import Dessert from "../../images/des.svg"
import Sauces from "../../images/souces.svg"
import "./buttonsNav.css"
import "swiper/css";

const TypeImages = {
    Burger: Burger,
    Appetizer: Snacks,
    Sauce: Sauces,
    Dessert: Dessert,
    Wok: Wok,
    HotDog: HotDog,
    Pizza: Pizza,
    Shawarma: Shawarma
  };

const UniqueTypes = [...new Set(MenuItems.map(item => item.type))];

const DefaultImage = HotDog;

function ButtonsNav({onClick}) {

  const [selectedType, setSelectedType] = useState("Burger");
  const [shouldEnableSwiper, setShouldEnableSwiper] = useState(
    window.innerWidth <= 1200 
  );

  const handleButtonClick = (type) => {
    setSelectedType(type);
    onClick(type);
  };

  useEffect(() => {
    const handleResize = () => {
      setShouldEnableSwiper(window.innerWidth <= 1200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="buttons-nav">
      <div className="container buttons-nav__container">
        {shouldEnableSwiper ? (
          <Swiper watchSlidesProgress={true} className="mySwiper" breakpoints={{
            1100: {
              slidesPerView: 6.5,
            },
            950: {
              slidesPerView: 5.5,
            },
            780: {
              slidesPerView: 4.2,
            },
            600: {
              slidesPerView: 3.5,
            },
            500: {
              slidesPerView: 3,
            },
            400: {
              slidesPerView: 2.5,
            },
            300: {
              slidesPerView: 2.2,
            },
          }}>
            {UniqueTypes.map((type) => (
              <SwiperSlide key={type}>
                <button
                  className={`buttons-nav__button ${selectedType === type ? "active" : ""}`}
                  onClick={() => handleButtonClick(type)}
                >
                  <img src={TypeImages[type] || DefaultImage} alt={`${type}`} />
                  <span className="buttons-nav__span">{type}</span>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          UniqueTypes.map((type) => (
            <button
              className={`buttons-nav__button ${selectedType === type ? "active" : ""}`}
              key={type}
              onClick={() => handleButtonClick(type)}
            >
              <img src={TypeImages[type] || DefaultImage} alt={`${type}`} />
              <span className="buttons-nav__span">{type}</span>
            </button>
          ))
        )}
      </div>
    </div>
  );
}
export default ButtonsNav;