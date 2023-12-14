import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { MdOutlineFacebook } from "react-icons/md";
import { TiVendorApple } from "react-icons/ti";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const [isRegister, setIsRegister] = useState(false);

  const switchToLogin = (e) => {
    e.preventDefault();
    setIsRegister(false);
  };

  const switchToRegister = (e) => {
    e.preventDefault();
    setIsRegister(true);
  };
  return (
    <div className="register-div centering">
      <form className="register-form centerin g">
        <div className="btn-wrapper">
          <button className="btn">
            <span className="centering">
              <MdOutlineFacebook className="s-m-icons fb-icon" />
              <span>Продолжить через Facebook</span>
            </span>
          </button>
          <button className="btn">
            <span className="centering">
              <TiVendorApple className="s-m-icons " />
              <span>Продолжить через Apple</span>
            </span>
          </button>
          <button className="btn">
            <span className="centering">
              <FcGoogle className="s-m-icons" />
              <span>Продолжить через Google</span>
            </span>
          </button>
        </div>
        <div className="or-div">
          <hr />
          <b>или</b>
          <hr />
        </div>
        <div className="reg-div">
          <button
            className={!isRegister ? "active" : "login-btn"}
            onClick={switchToLogin}
          >
            Login
          </button>
          <button
            className={isRegister ? "active" : "login-btn"}
            onClick={switchToRegister}
          >
            Register
          </button>
        </div>
        <div className="email_reg-div">
          <p>Электронная почта или телефон</p>
          <input type="email" className="inp" />
          <p>Пароль</p>
          <input type="password" className="inp" />
          <Link className="link">Забыли пароль?</Link>
          <p>
            При входе вы соглашаетесь с нашими{" "}
            <Link className="link">Условия использования</Link>.
          </p>
          {isRegister && (
            <>
              <p>
                Я соглашаюсь с {<Link to="">Условия использования</Link>}, а
                также с передачей и обработкой моих данных в OLX. Я подтверждаю
                своe совершеннолетие и ответственность за размещение объявления
              </p>
              <div className="confirm-div">
                <input type="checkbox" name="" id="" />
                <p>
                  Да, я хочу получать информацию о новостях и акциях на OLX.
                </p>
              </div>
            </>
          )}
          <button className="btn" type="submit">
            {isRegister ? "Зарегистрироваться" : "Войти"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
