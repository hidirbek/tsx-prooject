import React from "react";
import "./ChoosingCategory.css";

const ChoosingCategory = () => {
  const category_names = [
    { img_url: "https://picsum.photos/100/90", category_name: "Транспорт" },
    { img_url: "https://picsum.photos/100/90", category_name: "Работа" },
    { img_url: "https://picsum.photos/100/90", category_name: "Недвижимость" },
    { img_url: "https://picsum.photos/100/90", category_name: "Мода и стиль" },
    { img_url: "https://picsum.photos/100/90", category_name: "Электроника" },
    {
      img_url: "https://picsum.photos/100/90",
      category_name: "Бытовая техника",
    },
    { img_url: "https://picsum.photos/100/90", category_name: "Животное" },
    {
      img_url: "https://picsum.photos/100/90",
      category_name: "Хобби, отдых и спорт товары",
    },
    { img_url: "https://picsum.photos/100/90", category_name: "Обмен" },
    { img_url: "https://picsum.photos/100/90", category_name: "Отдам даром" },
  ];
  return (
    <div className="choosing_category-part">
      <div className="container">
        <h2 className="choosing_category-title">Выберите категорию</h2>
        <ul className="categories_list">
          {category_names.map((el) => {
            return (
              <li className="category_items">
                <button className="category_btn">
                  <img className="category_img" src={el.img_url} alt="" />
                  <p className="category_name">{el.category_name}</p>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ChoosingCategory;
