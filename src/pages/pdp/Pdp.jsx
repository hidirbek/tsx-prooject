import React from "react";
import "./Pdp.css";
import { CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import { CgAlbum } from "react-icons/cg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Pdp = () => {
  return (
    <div className="pdp-part">
      <div className="container">
        <div className="search-bar">
          <div className="searchBar-wrapper">
            <div>
              <input
                className="search-inp"
                type="text"
                placeholder="Чего ищете?"
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
        <div className="path_info-wrapper">
          <button className="back-btn">
            <FaChevronLeft />
            Назад
          </button>
          <p className="path_info">
            Главная/Транспорт/Автозапчасти и аксессуары/Автозвук/Автозвук -
            Ташкентская область/Автозвук - Келес
          </p>
        </div>

        <div className="product_info-wrapper">
          <div className="pdp_swiper-wrapper">
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper pdp-swiper"
            >
              <SwiperSlide>
                <img src={"https://via.placeholder.com/580/92c952"} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={"https://via.placeholder.com/580/92c952"} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={"https://via.placeholder.com/580/92c952"} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="pdp_user_location-wrapper">
            <div className="pdp_user_info">
              <h3 className="pdp_user-title pdp-titles">ПОЛЬЗОВАТЕЛЬ</h3>
              <p className="pdp_username">
                <CiUser /> Зафаржон
              </p>
              <p className="user_register_time">
                на TSX с<b> августа 2022 г.</b>
              </p>
              <button className="show_number-btn pdp-titles">
                Показать номер
              </button>
            </div>
            <div className="pdp_location">
              <h3 className="pdp_location-title pdp-titles">МЕСТОПОЛОЖЕНИЕ</h3>
              <div>
                <div className="pdp_address-wrapper">
                  <p className="pdp_address-title pdp-titles">
                    <SlLocationPin /> Адрес
                  </p>
                  <p className="pdp_location ">
                    <b>Боз,</b> Андижанская область
                  </p>
                </div>
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191884.839870896!2d69.11455543810986!3d41.282737946449835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1702738859616!5m2!1sru!2s"
                    width="186"
                    height="127"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Unique Title"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about_product text">
          <p className="published_time">Опубликовано сегодня в 13:34</p>
          <h3 className="product_name">
            KENWOOD 700w kalo’nka yangi madel keldi 2ta juda sfatli 4ta
            pishalkali
          </h3>
          <span className="product_price">394 000 сум</span>
          <p className="product_opisnye">ОПИСАНИЕ</p>
          <p className="product_desc">
            Assalom alaykum. Manzil ToshkentIsh vaqti 09:00 dan uzog’i max 22:30
            gacha • iltmos telefon qilishdan oldin oxirigacham o’qing! Super
            madel keldi {">"} без усилителBizda xaridorlar uchun qulayliklar
            mavjud{">"}Aloxida manzilizga eltib beramiz dastafka Toshkent faqat
            faqat{">"}
            Aloxida mashinangizga o’rnatib beramiz yoki o’rnatib beradigan
            serviz bilan taminlaymiz{">"} Agar sizda eski tuzukroq avto
            magnito’la kalo’nka bo’lsa agar to’g’ri kelsa kelshib bartr zamen
            qilamiz yoki Naxtga sotamiz clik naxt shakilda {">"} bez usilitel{" "}
            {">"} под оргинал• • kenwood 700w ikkta ta yangi kalo’nka ushbu
            kalo’nka oldinglaridan ancha farqliUsilitel umuman keremas bez
            usilitelDeyarli magnito’la tanlamaydi faqat to’g’ri o’rnatilsa
            bo’ldi yangi karo’pkadaancha aqli 4 ta pishlkali yani kalo’nkani
            ustida. Maxsus 4 ta katta kichik pishalkalar joylashgan va ularni
            barchasi ishlaydi ularni rasmini yuqorida ko’rshingiz
            mumkinMagnitiham ancha katta yani 10sm dan ortiqroq qatiq qog’oz
            pardali cheti yumshoq qoplamali shu sabab ovozi anchaa tiniq va
            yoqimli umuman usilitel kerak emas bez usilitel ishlaydiKamplektda
            karo’pkadan ikkta ta kenwood kalo’nka ikkta maxsus to’liq yopiq
            xumoya setkasi bilan chiqadi
          </p>
          <div className="product_keys-wrapper">
            <p>ID:1234564789</p>
            <p>Просмотров: 100</p>
            <Link to="#">
              <CgAlbum /> Пожаловаться
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pdp;
