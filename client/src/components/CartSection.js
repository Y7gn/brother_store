import React from "react";
import { useAppContext } from "../context/appContext";
import { useLocation } from "react-router-dom";

const CartSection = () => {
  const { cart } = useAppContext();
  console.log(cart);
  console.log("Object.values(cart)");
  console.log(Object.values(cart));
  const location = useLocation();
  const handleWhatsAppOrder = () => {
    const orderDetails = Object.values(cart);
    console.log("orderDetails");
    console.log(orderDetails);

    const queryParams = new URLSearchParams();
    queryParams.set(
      "text",
      `I want to place an order [${Object.values(cart)
        .map((element) => {
          const { name, price } = element;
          return `***${name}: ${price}$***`;
        })
        .join(", ")}].`
    );

    const whatsappUrl = `https://wa.me/+971566551575?${queryParams.toString()}`;

    // Navigate to the WhatsApp URL
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="cartContainer">
      <h1 className="cartContainerHeader">Cart Items</h1>
      <div className="allcartContainerHeader">
        <div className="rightcartContainerHeader">
          {Object.values(cart).map((element) => {
            const { _id, name, price } = element;
            return (
              <div
                key={_id}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                }}
              >
                <h1 style={{ color: "white", marginLeft: "2rem" }}>{name} :</h1>
                <p style={{ color: "white", fontSize: "3rem" }}>{price}$</p>
              </div>
            );
          })}
        </div>
        <div className="leftcartContainerHeader">
          <button className="contactBtn" onClick={handleWhatsAppOrder}>
            Whatsapp
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartSection;
