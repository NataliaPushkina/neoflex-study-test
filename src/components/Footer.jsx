import { Link } from "react-router-dom";
import sphere from "../images/sphere.svg";
import vk from "../images/VK.svg";
import telegram from "../images/Telegram.svg";
import whatsapp from "../images/Whatsapp.svg";

function Footer() {
  return (
    <div className="footer">
      <Link to="/" className="logo">QPICK</Link>

      <ul className="footer__list">
        <li className="footer__item">
          <Link to="/favorites" className="footer__link">
            Избранное
          </Link>
        </li>
        <li className="footer__item">
          <Link to="/basket" className="footer__link">
            Корзина
          </Link>
        </li>
        <li className="footer__item">
          <Link to="/contacts" className="footer__link">
            Контакты
          </Link>
        </li>
      </ul>

      <ul className="footer__list">
        <li className="footer__item">
          <Link to="/#!" className="footer__link">
            Условия сервиса
          </Link>
        </li>
        {/* <li className="footer__item">hhhh</li> */}
        <li className="footer__item">
          <div className="footer__icons">
            <img src={sphere} alt="sphere" className="footer__icon" />
            <a href="!#" className="footer__lang footer__lang_active">
              Рус
            </a>
            <a href="!#" className="footer__lang">
              Eng
            </a>
          </div>
        </li>
      </ul>

      <ul className="footer__list footer__list_social">
        <li>
          <img src={vk} alt="vk" className="footer__icon footer__icon_social" />
        </li>
        <li>
          <img src={telegram} alt="telegram" className="footer__icon footer__icon_social" />
        </li>
        <li>
          <img src={whatsapp} alt="whatsapp" className="footer__icon footer__icon_social" />
        </li>
      </ul>
    </div>
  );
}

export default Footer;
