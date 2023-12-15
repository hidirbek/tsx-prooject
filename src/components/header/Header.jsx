import React from "react";
import "./Header.css";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BsBoxSeam, BsCart } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="site_header">
      <div className="container">
        <div className="header-wrapper">
          <div className="logo-wrapper">
            <img src={require("./logo.svg").default} alt="ewf" />
            <h1 className="logo_name">TSX</h1>
          </div>
          <nav className="site_header-nav">
            <div>
              <MdOutlineFavoriteBorder className="icons" />
              <p className="nav_icon-name">Избранное</p>
            </div>
            <div>
              <BsBoxSeam className="icons" />
              <p className="nav_icon-name">Заказы</p>
            </div>
            <div>
              <BsCart className="icons" />
              <p className="nav_icon-name">Корзина</p>
            </div>
            <span>
              <FaRegUserCircle className="icons" />
              <p className="user_name">Алексей</p>
            </span>
            <button className="announce-btn">Подать объявления</button>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_495_184)">
                <mask
                  id="mask0_495_184"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" rx="12" fill="#F8F9FA" />
                </mask>
                <g mask="url(#mask0_495_184)">
                  <path
                    d="M0 7.82812L11.8969 6.92344L24 7.82812V16.1719L12.0516 17.6859L0 16.1719V7.82812Z"
                    fill="#0052B4"
                  />
                  <path d="M0 0H24V7.82812H0V0Z" fill="#EEEEEE" />
                  <path d="M0 16.1719H24V24H0V16.1719Z" fill="#D80027" />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_495_184">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
