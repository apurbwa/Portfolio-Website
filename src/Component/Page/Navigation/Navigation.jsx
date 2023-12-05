import { useState } from "react";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Avatar from "../../../assets/avater/avater.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(true);

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <div className="navigation">
      <div className="responsive-menu">
        <div className="res-head-nav">
          <div className="logo heading-secondary">Apurbwa Kumar</div>
          <div className="menu-btn" onClick={toggleNav}>
            <label className="menu-btn__button">
              <span className="menu-btn__icon">&nbsp;</span>
            </label>
          </div>
        </div>

        <div className={`res-menu ${isNavExpanded ? "show" : ""}`}>
          <div>
            <div className="avatar">
              <img src={Avatar} alt="" />
            </div>
            <div className="author heading-tertiary">Apurbwa Kumar</div>
          </div>

          <nav className="nav">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          <footer>
            <div className="social u-margin-bottom-medium">
              <ul>
                <li>
                  <Link>
                    <FaFacebook className="icon" />
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaTwitter className="icon" />
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaLinkedinIn className="icon" />
                  </Link>
                </li>
              </ul>
            </div>
            <p className="heading-paragraph">
              Copyright © 2023 Apurbwa Kumar. All rights reserved.
            </p>
          </footer>
        </div>
      </div>

      <div className="main-menu">
        <div>
          <div className="avatar">
            <img src={Avatar} alt="" />
          </div>
          <div className="author heading-tertiary">Apurbwa Kumar</div>
        </div>

        <nav className="nav">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <footer>
          <div className="social u-margin-bottom-medium">
            <ul>
              <li>
                <Link>
                  <FaFacebook className="icon" />
                </Link>
              </li>
              <li>
                <Link>
                  <FaTwitter className="icon" />
                </Link>
              </li>
              <li>
                <Link>
                  <FaLinkedinIn className="icon" />
                </Link>
              </li>
            </ul>
          </div>
          <p className="heading-paragraph">
            Copyright © 2023 Apurbwa Kumar. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Navigation;
