import React, { useEffect, useState } from "react";

import { useAppContext } from "../context/appContext";
const CardCurousel = ({
  _id,
  icon,
  logo,
  productTitle,
  paragraph,
  user,
  price,
}) => {
  const [isInCart, setIsInCart] = useState(false);
  let isItemInCart = false;
  const { handleClick, cart } = useAppContext();
  // console.log(cart);
  const handleClickLocal = (e) => {
    console.log(_id);
    console.log(price);
    const cartItems = Object.values(cart);
    // console.log(cartItems);
    const isItemInCart = cartItems.filter((item) => item._id === _id);
    if (isItemInCart.length === 0) {
      setIsInCart(false);
    }
    if (isItemInCart.length > 0) {
      setIsInCart(true);
    }
    handleClick({ _id, name: user, price });
  };
  useEffect(() => {
    const cartItems = Object.values(cart);
    // console.log(cartItems);
    const isItemInCart = cartItems.filter((item) => item._id === _id);
    // console.log(isItemInCart.length);
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
    <div class="container">
      <div class="card_box">
        <h4 className="cardTitle">{productTitle}</h4>
        {/* <h4 className="cardParagraph">:وصف الخدمة</h4> */}
        {/* <h4 className="cardParagraph1">{paragraph}</h4> */}
        <div className="cardButtom">
          {logo ? (
            <img
              src={logo}
              width="100px"
              alt="my"
              //   style={{ "border-radius": "50px" }}
              className="logoCard curouseLogo"
            />
          ) : (
            icon
          )}
          {/* <button className="cardButton">اضافة</button> */}
        </div>
        <div className="">
          <p className="curouselSliderUser">{user}</p>
        </div>
        <div className="">
          <p className="curouselSliderUser">{price + "$"}</p>
        </div>
        <div className="buttonWrapper" onClick={handleClickLocal}>
          <button
            class="button-34 curouselSliderButton"
            role="button"
            style={buttonStyle}
          >
            {isInCart ? "ازالة" : "اضافة"}
          </button>
        </div>
        <span></span>
      </div>
    </div>
  );
};

export default CardCurousel;
// <div class="cardCurousel">
//   <h4 className="cardTitle">{text}</h4>
//   <h4 className="cardParagraph">:وصف الخدمة</h4>
//   <h4 className="cardParagraph1">{paragraph}</h4>
//   <div className="cardButtom">
//     {logo ? (
//       <img
//         src={logo}
//         width="100px"
//         alt="my"
//         style={{ "border-radius": "50px" }}
//         className="logoCard"
//       />
//     ) : (
//       icon
//     )}
//     {/* <button className="cardButton">اضافة</button> */}
//     <div className="buttonWrapper">
//       <button class="button-34" role="button">
//         اضافة
//       </button>
//     </div>
//   </div>
// </div>
