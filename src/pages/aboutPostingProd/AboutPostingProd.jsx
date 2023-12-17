import React, { useState } from "react";
import "./AboutPostingProd.css";

const AboutPostingProd = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText);
  };
  const symbolCount = text.length;
  return (
    <div className="about_postingProd">
      <div className="container">
        <div className="product_details">
          <h4>Опишите в подробностях</h4>
          <div className="prod_name-wrapper">
            <p className="prod_inp-titles">Укажите название*</p>
            <input
              type="text"
              placeholder="Например, Iphone 14 pro max с гарантией"
            />
          </div>
          <div className="prod_category-wrapper">
            <p className="prod_inp-titles">Категория*</p>
            <select name="" id="">
              <option value="">Выбрать категорию</option>
              <option value="">Транспорт</option>
              <option value="">Недвижимость</option>
            </select>
          </div>
        </div>
        <div className="about-prod">
          <h4 className="prod_inp-titles">Описание*</h4>
          <textarea
            value={text}
            onChange={handleChange}
            name=""
            id=""
            cols="100"
            rows="10"
            minLength={80}
            maxLength={9000}
            placeholder="Подумайте, какие подробности вы хотели бы узнать из объявления. И добавьте их в описание"
          ></textarea>
          <div className="about_textarea">
            <p className="prod_inp-titles">Напишите еще 80 символов</p>
            <p>{symbolCount}/9000</p>
          </div>
        </div>
        <div className="user_location-wrapper">
          <p className="prod_inp-titles">Местоположение*</p>
          <input
            type="text"
            className="user_contact-inputs"
            required
            placeholder="Ваше местоположение"
          />
        </div>
        <div className="contact_info">
          <p className="prod_inp-titles">Контактная информация</p>
          <div>
            <p className="prod_inp-titles">Контактное лицо*</p>
            <input
              className="user_contact-inputs"
              required
              type="text"
              placeholder="Выбрать категорию"
            />
          </div>
          <div className="contact_info">
            <p className="prod_inp-titles">Email-адрес</p>
            <input
              className="user_contact-inputs"
              required
              type="email"
              placeholder="Ваш email"
            />
          </div>
          <div className="contact_info">
            <p className="prod_inp-titles">Номер телефона</p>
            <input
              className="user_contact-inputs"
              required
              type="text"
              placeholder="Ваш номер"
            />
          </div>
          <div className="confirm-btn-wrapper">
            <div className="space-div"></div>
            <button className="see-btn">Предпросмотрь</button>
            <button className="publish-btn">Опубликовать</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPostingProd;
