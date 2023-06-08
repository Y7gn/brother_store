import React from "react";
import Navbar from "../components/Navbar.js";
import Card from "../components/Card.js";
import Slider from "../components/Slider.js";
import MyFooter from "../components/MyFooter.js";
import OffersContainer from "../components/OffersContainer.js";
import { BsCodeSlash } from "react-icons/bs";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Navbar />

      <section className="chooseInfoContainer">
        {/* <button class="button-51 not-button-51" role="button">
          ابدا
        </button> */}
        <h1 className="chooseInfoHeader"> مرحبا بكم في متجر مايكند</h1>
        <p className="chooseInfoSubParagraph">
          :من فضلك قم باختيار الخدمات المتاحة
        </p>

        {/* <div class={`moreSerivcesContainer`}>
        
      </div> */}
      </section>
      <Slider />
      <OffersContainer />

      <MyFooter />
    </div>
  );
};

export default HomePage;
{
  /* <div className="CardsContainer">
  <Card
    logo={require("../assets/instagram.png")}
    text={"خدمات انستقرام"}
    paragraph={
      "4515 -S6-E مشاهدات انستقرام [100/1M] [يعمل مع Igtv/فيديو بوست عادي/REEL]"
    }
  />
  <Card
    logo={require("../assets/instagram.png")}
    text={"خدمات انستقرام"}
    paragraph={
      "4515 -S6-E مشاهدات انستقرام [100/1M] [يعمل مع Igtv/فيديو بوست عادي/REEL]"
    }
  />
  <Card
    logo={require("../assets/instagram.png")}
    text={"خدمات انستقرام"}
    paragraph={
      "4515 -S6-E مشاهدات انستقرام [100/1M] [يعمل مع Igtv/فيديو بوست عادي/REEL]"
    }
  />
  <Card
    logo={require("../assets/tiktok.png")}
    text={"خدمات تيك توك"}
    paragraph={
      "4515 -S6-E مشاهدات انستقرام [100/1M] [يعمل مع Igtv/فيديو بوست عادي/REEL]"
    }
  />
  <Card
    logo={require("../assets/tiktok.png")}
    text={"خدمات تيك توك"}
    paragraph={
      "4515 -S6-E مشاهدات انستقرام [100/1M] [يعمل مع Igtv/فيديو بوست عادي/REEL]"
    }
  />
  <Card
    logo={require("../assets/tiktok.png")}
    text={"خدمات تيك توك"}
    paragraph={
      "4515 -S6-E مشاهدات انستقرام [100/1M] [يعمل مع Igtv/فيديو بوست عادي/REEL]"
    }
  />
  <Card
    logo={require("../assets/shakeplus.jpg")}
    text={"خدمات شاك بلس"}
    paragraph={
      "4515 -S6-E مشاهدات انستقرام [100/1M] [يعمل مع Igtv/فيديو بوست عادي/REEL]"
    }
  />
  <Card
    icon={<BsCodeSlash size={110} color="#5E5DF0" />}
    text={"خدمات تصميم مواقع"}
    paragraph={
      "4515 -S6-E مشاهدات انستقرام [100/1M] [يعمل مع Igtv/فيديو بوست عادي/REEL]"
    }
  />
</div>; */
}
