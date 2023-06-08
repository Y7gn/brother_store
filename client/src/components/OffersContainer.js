import React from "react";
import { useAppContext } from "../context/appContext";
import Card from "./Card";
const OffersContainer = () => {
  const { offers } = useAppContext();
  console.log(offers);
  return (
    <div className="CardsContainer">
      {offers.map((offer) => (
        <Card
          logo={offer.tags}
          productTitle={offer.productTitle}
          description={offer.description}
          price={offer.price}
        />
      ))}
    </div>
  );
};

export default OffersContainer;
