import React from "react";
import { useAppContext } from "../context/appContext";
import { BsCodeSlash } from "react-icons/bs";

const Card = ({ icon, logo, productTitle, description, price, _id }) => {
  const { cart, addProduct, removeProduct } = useAppContext();

  const isItemInCart = cart.hasOwnProperty(_id);

  return (
    <div className="card">
      <h4 className="cardTitle">{productTitle}</h4>
      <h4 className="cardParagraph">:وصف الخدمة</h4>
      <h4 className="cardParagraph1">{description}</h4>
      <div className="cardButtom">
        {logo === "instagram" ? (
          <img
            src={require("../assets/instagram.png")}
            width="100px"
            alt="my"
            style={{ borderRadius: "50px" }}
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

        <div className="buttomRight">
          <p className="cardPrice">{price + "$"}</p>

          <div className="BtnContainer">
            <div
              className="buttonWrapper"
              onClick={() =>
                addProduct({
                  _id,
                  name: productTitle,
                  price,
                  description,
                })
              }
            >
              <button className="button-34 smaller addProduct" role="button">
                +
              </button>
            </div>
            <h2 className="qty">{isItemInCart ? cart[_id].qty : 0}</h2>
            <div
              className="buttonWrapper"
              onClick={() =>
                removeProduct({
                  _id,
                  name: productTitle,
                  price,
                  description,
                })
              }
            >
              <button className="button-34 smaller removeProduct" role="button">
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
