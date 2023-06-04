import React from "react";

const Card = ({ icon, logo, text, paragraph }) => {
  return (
    <div class="card">
      <h4 className="cardTitle">{text}</h4>
      <h4 className="cardParagraph">:وصف الخدمة</h4>
      <h4 className="cardParagraph1">{paragraph}</h4>
      <div className="cardButtom">
        {logo ? (
          <img
            src={logo}
            width="100px"
            alt="my"
            style={{ "border-radius": "50px" }}
            className="logoCard"
          />
        ) : (
          icon
        )}
        {/* <button className="cardButton">اضافة</button> */}
        <div className="buttonWrapper">
          <button class="button-34" role="button">
            اضافة
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
