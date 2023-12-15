import React from "react";
import { Link } from "react-router-dom";
import { BsGooglePlay } from "react-icons/bs";
import { GrApple } from "react-icons/gr";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div>
          <ul className="footer-list">
            <li className="footer_list-items ">
              <Link>Мобильное приложения</Link>
              <Link>Помощь</Link>
              <Link>Платные услуги</Link>
              <Link>Бизнес на ТSХ</Link>
              <Link>Реклама на сайте</Link>
            </li>
            <li className="footer_list-items">
              <Link>Как продавать и покупать?</Link>
              <Link>Правила безопасности</Link>
              <Link>Карта сайта</Link>
              <Link>Карта регионов</Link>
              <Link>Обратная связь</Link>
            </li>
            <li className="social_m-part">
              <button>
                <BsGooglePlay className="social_m-icon" />
                Google Play
              </button>
              <button>
                <GrApple className="social_m-icon" />
                App Store
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
