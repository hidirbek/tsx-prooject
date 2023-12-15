import React from "react";
import "./Products.css";
import { FaAngleRight } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";

const Products = () => {
  const category_names = [
    { name: "Легковые автомобили" },
    { name: "Грузовые автомобили" },
    { name: "Шины, диски и колёса" },
    { name: "Прочие запчасти" },
    { name: "Мото" },
    { name: "Автобусы" },
    { name: "Спецтехника" },
    { name: "Мотозапчасти и аксессуары" },
    { name: "Другой транспорт" },
    { name: "Водный транспорт" },
    { name: "Сельхозтехника" },
    { name: "Автозапчасти и аксессуары" },
    { name: "Прицепы" },
    { name: "Запчасти дляспец / с.х. техники" },
  ];
  const car_info = [
    {
      picture: "https://via.placeholder.com/200/9c184f",
      name: "Nexia-3",
      location: "Ташкент, Учтепинский район Сегодня 10:23",
      price: "114 000 000 сум",
    },
    {
      picture: "https://via.placeholder.com/200/9c184f",
      name: "Cobalt",
      location: "Ташкент, Учтепинский район Сегодня 10:23",
      price: "160 000 000 сум",
    },
    {
      picture: "https://via.placeholder.com/200/9c184f",
      name: "Lasetti-Jentra",
      location: "Ташкент, Учтепинский район Сегодня 10:23",
      price: "180 000 000 сум",
    },
    {
      picture: "https://via.placeholder.com/200/9c184f",
      name: "Nexia-3",
      location: "Ташкент, Учтепинский район Сегодня 10:23",
      price: "114 000 000 сум",
    },
    {
      picture: "https://via.placeholder.com/200/9c184f",
      name: "Cobalt",
      location: "Ташкент, Учтепинский район Сегодня 10:23",
      price: "160 000 000 сум",
    },
    {
      picture: "https://via.placeholder.com/200/9c184f",
      name: "Lasetti-Jentra",
      location: "Ташкент, Учтепинский район Сегодня 10:23",
      price: "180 000 000 сум",
    },
    {
      picture: "https://via.placeholder.com/200/9c184f",
      name: "Nexia-3",
      location: "Ташкент, Учтепинский район Сегодня 10:23",
      price: "114 000 000 сум",
    },
    {
      picture: "https://via.placeholder.com/200/9c184f",
      name: "Cobalt",
      location: "Ташкент, Учтепинский район Сегодня 10:23",
      price: "160 000 000 сум",
    },
    {
      picture: "https://via.placeholder.com/200/9c184f",
      name: "Lasetti-Jentra",
      location: "Ташкент, Учтепинский район Сегодня 10:23",
      price: "180 000 000 сум",
    },
    {
      picture: "https://via.placeholder.com/200/9c184f",
      name: "Nexia-3",
      location: "Ташкент, Учтепинский район Сегодня 10:23",
      price: "114 000 000 сум",
    },
    {
      picture: "https://via.placeholder.com/200/9c184f",
      name: "Cobalt",
      location: "Ташкент, Учтепинский район Сегодня 10:23",
      price: "160 000 000 сум",
    },
    {
      picture: "https://via.placeholder.com/200/9c184f",
      name: "Lasetti-Jentra",
      location: "Ташкент, Учтепинский район Сегодня 10:23",
      price: "180 000 000 сум",
    },
    {
      picture: "https://via.placeholder.com/200/9c184f",
      name: "Nexia-3",
      location: "Ташкент, Учтепинский район Сегодня 10:23",
      price: "114 000 000 сум",
    },
    {
      picture: "https://via.placeholder.com/200/9c184f",
      name: "Cobalt",
      location: "Ташкент, Учтепинский район Сегодня 10:23",
      price: "160 000 000 сум",
    },
    {
      picture: "https://via.placeholder.com/200/9c184f",
      name: "Lasetti-Jentra",
      location: "Ташкент, Учтепинский район Сегодня 10:23",
      price: "180 000 000 сум",
    },
  ];

  return (
    <div className="products_part">
      <div className="container">
        <div className="triangle"></div>
        <div className="categories-products">
          <div>
            {category_names.map((cat, index) => {
              return (
                <div key={index} className="category_part">
                  <h3>
                    <FaAngleRight />
                    {cat.name}
                  </h3>
                </div>
              );
            })}
          </div>

          <div className="product_cards">
            {car_info.map((i, idx) => {
              return (
                <div key={idx} className="product_card">
                  <img className="product_image" src={i.picture} alt="" />
                  <h4 className="product-title">{i.name}</h4>
                  <div>
                    <div>
                      <p className="location_text">{i.location}</p>
                      <b className="price">{i.price}</b>
                    </div>
                    <MdFavoriteBorder className="fav_icon" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <button className="more-btn">Показать ещё 20 </button>
      </div>
    </div>
  );
};

export default Products;
