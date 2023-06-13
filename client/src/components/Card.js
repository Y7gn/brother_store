import React, { useEffect, useState } from "react";
import { BsCodeSlash } from "react-icons/bs";
import { useAppContext } from "../context/appContext";

const Card = ({ icon, logo, productTitle, description, price, _id }) => {
  // console.log(productTitle);
  const [isInCart, setIsInCart] = useState(false);
  let isItemInCart = false;

  const { handleClick, cart } = useAppContext();
  const handleClickLocal = (e) => {
    console.log(_id);
    console.log(price);
    const cartItems = Object.values(cart);
    console.log(cartItems);
    const isItemInCart = cartItems.filter((item) => item._id === _id);
    if (isItemInCart.length === 0) {
      setIsInCart(false);
    }
    if (isItemInCart.length > 0) {
      setIsInCart(true);
    }
    handleClick({ _id, name: productTitle, price });
  };
  useEffect(() => {
    const cartItems = Object.values(cart);
    console.log(cartItems);
    const isItemInCart = cartItems.filter((item) => item._id === _id);
    console.log(isItemInCart.length);
    if (isItemInCart.length === 0) {
      setIsInCart(false);
    }
    if (isItemInCart.length > 0) {
      setIsInCart(true);
    }
  }, [cart, _id]);
  const buttonStyle = {
    background: isInCart
      ? "linear-gradient(45deg, #FF6B6B, #FF3838)"
      : "linear-gradient(45deg, #5E5DF0, #13a22a)",
    boxShadow: isInCart
      ? "rgb(194 77 104) 0px 10px 20px -10px"
      : "#5e5df0 0 10px 20px -10px",
  };
  return (
    <div class="card">
      <h4 className="cardTitle">{productTitle}</h4>
      <h4 className="cardParagraph">:وصف الخدمة</h4>
      <h4 className="cardParagraph1">{description}</h4>
      {/* <div className="">
        <p className="cardPrice">{price + "$"}</p>
      </div> */}
      {/* <section> */}
      {/* <div class="content">
          <h2>Kemi</h2>
          <h2>Kemi</h2>
        </div> */}
      {/* </section> */}
      <div className="cardButtom">
        {logo === "instagram" ? (
          <img
            src={require("../assets/instagram.png")}
            width="80px"
            alt="my"
            style={{ "border-radius": "50px" }}
            className="logoCard"
          />
        ) : logo === "tiktok" ? (
          <img
            src={require("../assets/tiktok.png")}
            width="100px"
            alt="my"
            style={{ borderRadius: "50px" }}
            className="logoCard"
          />
        ) : logo === "shack" ? (
          <img
            src={require("../assets/shakeplus.jpg")}
            width="100px"
            alt="my"
            style={{ borderRadius: "50px" }}
            className="logoCard"
          />
        ) : logo === "develop" ? (
          <BsCodeSlash size={110} color="#5E5DF0" />
        ) : (
          <BsCodeSlash size={110} color="#5E5DF0" />
        )}

        {/* <button className="cardButton">اضافة</button> */}
        <div className="buttomRight">
          <p className="cardPrice">{price + "$"}</p>

          <div className="buttonWrapper" onClick={handleClickLocal}>
            <button className="button-34" role="button" style={buttonStyle}>
              {isInCart ? "ازالة" : "اضافة"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
