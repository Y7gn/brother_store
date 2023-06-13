import React from "react";
import { useAppContext } from "../context/appContext";
import Card from "./Card";
const OffersContainer = () => {
  const { offers } = useAppContext();
  console.log(offers);
  return (
    <div className="CardsContainer">
      {offers.map((offer) => {
        const { tags, productTitle, description, price, _id } = offer;
        return (
          <Card
            logo={tags}
            productTitle={productTitle}
            description={description}
            price={price}
            _id={_id}
          />
        );
      })}
    </div>
  );
};

export default OffersContainer;
