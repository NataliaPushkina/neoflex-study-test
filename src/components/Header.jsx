import { Link } from "react-router-dom";
import hart from "../images/hart.svg";
import basket from "../images/basket.svg";

function Header({ countLiked, countAdded }) {
  return (
    <div className="header">
      <Link to="/" className="logo">QPICK</Link>
      <ul className="header__nav-list">
        <li className="header__nav-item">
          <img src={hart} alt="hart" className="header__nav-img" />
          {
            countLiked > 0 && <div className="header__nav-item-count">{countLiked}</div>
          }
        </li>
        <li className="header__nav-item">
          <Link to="/basket">
          <img src={basket} alt="basket" className="header__nav-img" />
          {
            countAdded > 0 && <div className="header__nav-item-count">{countAdded}</div>
          }
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
