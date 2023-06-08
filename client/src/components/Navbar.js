import React from "react";
import {
  faYoutube,
  faSnapchat,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.css";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-black py-4 px-5 ">
      <div class="container-fluid">
        <a class="navbar-brand text-white" href="#">
          <div className="social">
            <a
              href="https://www.instagram.com/michnnd.old/"
              target="_blank"
              className="navtags"
            >
              <FontAwesomeIcon icon={faInstagram} className="iconAweasome" />
            </a>
            <a
              href="https://www.youtube.com/c/y7gn751"
              target="_blank"
              className="navtags"
            >
              <FontAwesomeIcon icon={faYoutube} className="iconAweasome" />
            </a>
            <a
              href="https://www.snapchat.com/add/مصعـب"
              target="_blank"
              className="navtags"
            >
              <FontAwesomeIcon icon={faSnapchat} className="iconAweasome" />
            </a>
          </div>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li class="nav-item">
              <a
                class="nav-link active text-white fs-3 me-3"
                aria-current="page"
                href="#"
              >
                الرئيسية
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white fs-3 me-3" href="#">
                نبذة عنا
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-white fs-3 me-3"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                خدماتنا
              </a>
              <ul class="dropdown-menu">
                <li class="mr-5">
                  <a class="dropdown-item fs-3 mr-5" href="#">
                    تجارب العملاء
                  </a>
                </li>
                <li>
                  <a class="dropdown-item fs-3 mr-5" href="#">
                    شركاؤنا
                  </a>
                </li>
                {/* <li><hr class="dropdown-divider"></li> */}
                <li className="mr-5">
                  <a class="dropdown-item fs-3 mr-5" href="#">
                    تواصل معنا
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled text-white fs-3">تواصل معنا</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
            <div className="logo">
              {/* //{" "} */}
              <img
                src={require("../assets/logo.png")}
                alt="logo"
                className="logo"
              />
              {/* //{" "} */}
            </div>
          </form>
        </div>
      </div>
    </nav>

    // <div className="header" id="header">
    //   <div className="social">
    //     <a
    //       href="https://www.instagram.com/michnnd.old/"
    //       target="_blank"
    //       className="navtags"
    //     >
    //       <FontAwesomeIcon icon={faInstagram} className="iconAweasome" />
    //     </a>
    //     <a
    //       href="https://www.youtube.com/c/y7gn751"
    //       target="_blank"
    //       className="navtags"
    //     >
    //       <FontAwesomeIcon icon={faYoutube} className="iconAweasome" />
    //     </a>
    //     <a
    //       href="https://www.snapchat.com/add/مصعـب"
    //       target="_blank"
    //       className="navtags"
    //     >
    //       <FontAwesomeIcon icon={faSnapchat} className="iconAweasome" />
    //     </a>
    //   </div>

    //   <div className="nav">
    //     <i className="fa-solid fa-bars"></i>
    //     <ul>
    //       <li>
    //         <a href="#home" className="navtags">
    //           الرئيسية
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#about" className="navtags">
    //           نبذة عنا
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#our-services" className="navtags">
    //           خدماتنا
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#testimonials" className="navtags">
    //           تجارب العملاء
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#team" className="navtags">
    //           شركاؤنا
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#contact" className="navtags">
    //           تواصل معنا
    //         </a>
    //       </li>
    //     </ul>
    //   </div>

    //   <div className="logo">
    //     <img src={require("../assets/logo.jpeg")} alt="logo" className="logo" />
    //   </div>
    // </div>
  );
};

export default Navbar;
