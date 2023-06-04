import React from "react";

const MyFooter = () => {
  return (
    <footer>
      <div className="contact" id="contact">
        <div className="container">
          <div className="box right">
            <div className="top">
              {/* <img
              src={require("../assets/images/footer/good-productred.png")}
              alt="product"
              className="footerIcon"
            /> */}
            </div>
            <div className="bottom">
              <h2>وسائل الدفع</h2>
              <div className="imgPayContainer">
                <img
                  src={require("../assets/adib.jpg")}
                  alt="social"
                  className="footerPayImg"
                />
                <img
                  src={require("../assets/bihance.png")}
                  alt="social"
                  className="footerPayImg"
                />
                <img
                  src={require("../assets/coinbase.jpg")}
                  alt="social"
                  className="footerPayImg"
                />
                <img
                  src={require("../assets/etisalat.jpg")}
                  alt="social"
                  className="footerPayImg"
                />
                <img
                  src={require("../assets/duo.jpg")}
                  alt="social"
                  className="footerPayImg"
                />
              </div>
            </div>
          </div>

          <div className="box left">
            <div className="top">
              {/* <img
              src={require("../assets/images/footer/supportred.png")}
              alt="product"
              className="footerIcon"
            /> */}
              <h2>وسائل التواصل</h2>
              <a href="https://www.instagram.com/michnnd.old/" target="_blank">
                <p>انستقرام</p>
              </a>
              <a href="https://www.youtube.com/c/y7gn751" target="_blank">
                <p>يوتيوب</p>
              </a>
              <a href="https://www.snapchat.com/add/مصعـب" target="_blank">
                <p>سناب شات</p>
              </a>
            </div>
            <div className="bottom">
              {/* <a href="https://www.mada.com.sa/ar" > <img className="mada" src="images/unnamed-removebg-preview.png" alt=""></a>
                    <a href="https://www.apple.com/apple-pay/ "><img src="images/apple-pay.png" alt=""></a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
