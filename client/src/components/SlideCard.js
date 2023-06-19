import React, { useEffect, useState } from "react";
import CardCurousel from "./CardCurousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAppContext } from "../context/appContext";

const SlideCard = () => {
  const { users } = useAppContext();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(users);
  const shouldRenderCarousel = windowWidth > 768; // Adjust the breakpoint as needed

  const settings = {
    dots: true,
    infinite: true,

    slidesToShow: shouldRenderCarousel ? 4 : 2,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };

  return (
    <>
      <Slider {...settings}>
        {users.map((value, index) => {
          const { _id, productTitle, user, description, price, tags } = value;

          return (
            <div className="curouselContainer" key={index}>
              <CardCurousel
                logo={require("../assets/instagram2.png")}
                productTitle={productTitle}
                paragraph={description}
                user={user}
                price={price}
                _id={_id}
                tags={tags}
              />
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default SlideCard;
