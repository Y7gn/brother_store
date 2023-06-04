import React from "react";

const CardCurousel = ({ icon, logo, text, paragraph, user, price }) => {
  return (
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
    <div class="container">
      <div class="card_box">
        <h4 className="cardTitle">{text}</h4>
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
        <div className="buttonWrapper">
          <button class="button-34 curouselSliderButton" role="button">
            اضافة
          </button>
        </div>
        <span></span>
      </div>
    </div>
  );
};

export default CardCurousel;
