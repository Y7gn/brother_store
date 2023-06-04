import React from "react";
import Sdata from "../Data/SData";
import CardCurousel from "./CardCurousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAppContext } from "../context/appContext";

const SlideCard = () => {
  const { products } = useAppContext();
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  console.log(products);
  return (
    <>
      <Slider {...settings}>
        {products.map((value, index) => {
          const { user, description, price, tags } = value;
          console.log(value.user);
          // console.log(index);
          return (
            <>
              <div className="curouselContainer" key={index}>
                <CardCurousel
                  logo={require("../assets/instagram2.png")}
                  text={"خدمات انستقرام"}
                  paragraph={description}
                  user={user}
                  price={price}
                />
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default SlideCard;
