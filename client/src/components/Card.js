import React from "react";
import { BsCodeSlash } from "react-icons/bs";

const Card = ({ icon, logo, productTitle, description, price }) => {
  console.log(productTitle);
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

          <div className="buttonWrapper">
            <button class="button-34" role="button">
              اضافة
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
