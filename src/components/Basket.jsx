import { useState, useEffect } from "react";
import BasketCard from "./BasketCard";

function Basket({ addedList, onBtnClick, increase, decrease }) {
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    if (addedList) {
      let sum = addedList.reduce(
        (prev, curr) => prev + curr.count * curr.price,
        0
      );
      setTotalSum(sum);
    }
  }, [addedList]);

  return (
    <div className="basket__content">
      <ul className="basket__list">
        {addedList ? (
          addedList.map((card) => {
            return (
              <BasketCard
                key={card.id}
                card={card}
                name={card.name}
                link={card.link}
                price={card.price}
                count={card.count}
                increase={increase}
                decrease={decrease}
                onBtnClick={onBtnClick}
              />
            );
          })
        ) : (
          <span>Корзина пуста</span>
        )}
      </ul>
      <div className="basket__total-content">
        <div className="basket__total-wrapper">
          <span className="basket__total">ИТОГО</span>
          <span className="basket__total">{totalSum}</span>
        </div>
        <button type="button" className="basket__button">
          Перейти к оформлению
        </button>
      </div>
    </div>
  );
}

export default Basket;
