import React from "react";
import "./SearchBar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="container">
        <div className="searchBar-wrapper">
          <div className="catalog_wrapper">
            <RxHamburgerMenu className="menu_icon" />
            <p>Каталог</p>
          </div>
          <div>
            <input
              className="search-inp"
              type="text"
              placeholder="Найти товар"
            />
            <CiSearch className="search_icon" />
          </div>
          <div>
            <FaLocationDot className="location_icon" />
            <input
              type="text"
              placeholder="Весь Узбекистан"
              className="location_inp"
            />
            <button className="search_btn">Искать</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
