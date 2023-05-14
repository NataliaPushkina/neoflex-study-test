// import { useState, useEffect } from "react";
import deletebtn from "../images/delete-icon.svg";
import plus from "../images/plus.svg";

function BasketCard(props) {
  // const [count, setCount] = useState(1);

  function handleDeleteClick() {
    props.onBtnClick(props.card);
  }

  // function addCount() {
  //   setCount(count + 1);
  // }

  // function removeCount() {
  //   setCount(count - 1);
  //   console.log(props.card.count);
  // }

  // useEffect(() => {
  //   if (count < 1) {
  //     props.onBtnClick(props.card);
  //   }
  // });

  return (
    <li className="basket-card">
      <div className="basket-card__wrapper">
        <div className="basket-card__info">
          <img
            src={props.link}
            alt={props.name}
            className="basket-card__image"
          />

          <div className="basket-card__caption">
            <h2 className="basket-card__title">{props.name}</h2>
            <p className="basket-card__price">{`${props.price} ₽`}</p>
          </div>
        </div>
        <button
          type="button"
          className="basket-card__button"
          onClick={handleDeleteClick}
        >
          <img
            src={deletebtn}
            alt="button delete"
            className="basket-card__button_delete"
          />
        </button>
      </div>

      <div className="basket-card__wrapper_2">
        <div className="basket-card__counter-wrapper">
          <button
            type="button"
            className="basket-card__counter-item"
            onClick={() => props.decrease(props.card)}
          >
            <span className="basket-card__counter-icon"></span>
          </button>
          <span className="basket-card__counter-value">{props.count}</span>
          <button
            type="button"
            className="basket-card__counter-item"
            onClick={() => props.increase(props.card)}
          >
            <img src={plus} alt="plus" className="basket-card__counter-img" />
          </button>
        </div>
        <span className="basket-card__counter-total">{`${
          props.price * props.count
        } ₽`}</span>
      </div>
    </li>
  );
}

export default BasketCard;
