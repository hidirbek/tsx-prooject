import React from "react";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="categories">
      <div className="container">
        <div className="categories-wrapper">
          <h2 className="category-title">Главные категории</h2>

          <div className="category-wrapper">
            <div className="category">
              <img
                className="category_img"
                src="https://via.placeholder.com/100/92c952"
                alt=""
              />
              <p className="category_name">Транспорт</p>
            </div>
            <div className="category">
              <img
                className="category_img"
                src="https://via.placeholder.com/100/92c952"
                alt=""
              />
              <p className="category_name">Недвижимость</p>
            </div>
            <div className="category">
              <img
                className="category_img"
                src="https://via.placeholder.com/100/92c952"
                alt=""
              />
              <p className="category_name">Электроника</p>
            </div>
            <div className="category">
              <img
                className="category_img"
                src="https://via.placeholder.com/100/92c952"
                alt=""
              />
              <p className="category_name">Работа</p>
            </div>
            <div className="category">
              <img
                className="category_img"
                src="https://via.placeholder.com/100/92c952"
                alt=""
              />
              <p className="category_name">Мода и стиль</p>
            </div>
            <div className="category">
              <img
                className="category_img"
                src="https://via.placeholder.com/100/92c952"
                alt=""
              />
              <p className="category_name">Бытовая техника</p>
            </div>
            <div className="category">
              <img
                className="category_img"
                src="https://via.placeholder.com/100/92c952"
                alt=""
              />
              <p className="category_name">Животное</p>
            </div>
            <div className="category">
              <img
                className="category_img"
                src="https://via.placeholder.com/100/92c952"
                alt=""
              />
              <p className="category_name">
                Хобби, отдых и спорт товарыанспорт
              </p>
            </div>
            <div className="category">
              <img
                className="category_img"
                src="https://via.placeholder.com/100/92c952"
                alt=""
              />
              <p className="category_name">Обмен</p>
            </div>
            <div className="category">
              <img
                className="category_img"
                src="https://via.placeholder.com/100/92c952"
                alt=""
              />
              <p className="category_name">Отдам даром</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
