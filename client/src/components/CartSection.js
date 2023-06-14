import React, { useState } from "react";
import { useAppContext } from "../context/appContext";
import { useLocation } from "react-router-dom";

import { AiOutlineWhatsApp } from "react-icons/ai";

const CartSection = () => {
  const { cart, totalPrice, handleChange, paymentType } = useAppContext();
  const [selectedType, setSelectedType] = useState("");

  const handleTypeSelect = (e) => {
    const name = e.target.name;
    handleChange({ name: "paymentType", value: name });
    setSelectedType(name);
  };

  const location = useLocation();
  const handleWhatsAppOrder = () => {
    const orderDetails = Object.values(cart);
    // console.log("orderDetails");
    // console.log(orderDetails);

    const queryParams = new URLSearchParams();
    queryParams.set(
      "text",
      `I want to place an order with payment option: *${paymentType}*\n
    The order is:
    ${Object.values(cart)
      .map((element) => {
        const { name, price, description, qty } = element;

        return `
        name:${name}: ${price} ${qty ? "*" + qty : ""} = ${
          price * (qty ? qty : 1)
        }$
        description:${description ? description : ""}
        \n`;
      })
      .join(",")}`
    );

    const whatsappUrl = `https://wa.me/+971566551575?${queryParams.toString()}`;

    // Navigate to the WhatsApp URL
    window.open(whatsappUrl, "_blank");
  };
  const imageStyle = {
    width: "80px",
    transition: "width 0.3s ease-in-out",
  };

  return (
    <section className="cartContainer">
      <h1 className="cartContainerHeader">قائمة طلباتي</h1>

      <div className="allcartContainerHeader">
        <div className="rightcartContainerHeader">
          {Object.values(cart).map((element) => {
            const { _id, name, price, description, qty } = element;
            return (
              <div key={_id} className="orderInfo">
                <p className="priceqtytotal">
                  {qty === undefined
                    ? `${price}$`
                    : `${price}x${qty}=${price * qty}$`}
                </p>
                <p className="orderDescription">
                  {description && `${description}`}
                </p>

                <h1 className="orderName">:{name}</h1>
              </div>
            );
          })}
        </div>
        <div className="leftcartContainerHeader">
          <div className="cartPayment">
            <h2 className="cartPaymentHeader">
              وسائل الدفع:
              <strong> "الزامي" </strong>
            </h2>
            <div className="imgPayContainer">
              <img
                src={require("../assets/adib.jpg")}
                alt="social"
                className="footerPayImg"
                onClick={(e) => handleTypeSelect(e)}
                name="اديب"
                style={selectedType === "اديب" ? imageStyle : undefined}
              />
              <img
                src={require("../assets/bihance.png")}
                alt="social"
                className="footerPayImg"
                name="بايننس"
                onClick={(e) => handleTypeSelect(e)}
                style={selectedType === "بايننس" ? imageStyle : undefined}
              />
              <img
                src={require("../assets/coinbase.jpg")}
                alt="social"
                className="footerPayImg"
                name="كوين بيس"
                onClick={(e) => handleTypeSelect(e)}
                style={selectedType === "كوين بيس" ? imageStyle : undefined}
              />
              <img
                src={require("../assets/etisalat.jpg")}
                alt="social"
                className="footerPayImg"
                name="اتصالات"
                onClick={(e) => handleTypeSelect(e)}
                style={selectedType === "اتصالات" ? imageStyle : undefined}
              />
              <img
                src={require("../assets/duo.jpg")}
                alt="social"
                className="footerPayImg"
                name="دو"
                onClick={(e) => handleTypeSelect(e)}
                style={selectedType === "دو" ? imageStyle : undefined}
              />
            </div>
          </div>
          <h2 className="totalPrice">المجموع: ${totalPrice}</h2>
          <button
            className={`contactBtn ${paymentType === "" && "removeProduct"}`}
            onClick={handleWhatsAppOrder}
            disabled={paymentType === "" ? true : false}
          >
            <AiOutlineWhatsApp
              style={{
                fontSize: "3rem",
                marginLeft: "1rem",
                width: "5rem",
                height: "5rem",
              }}
            />{" "}
            Whatsapp
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartSection;
