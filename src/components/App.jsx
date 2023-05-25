import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Basket from "./Basket";
import { headphones } from "./constants.js";
import { useState } from "react";

function App() {
  const [addedCards, setAddedCards] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  function increase(card) {
    const newList = addedCards.map((item) => {
      if (item.id === card.id) {
        return {
          ...item,
          count: ++item.count,
        };
      }
      return item;
    });
    setAddedCards(newList);
    sessionStorage.setItem("addedCards", JSON.stringify(newList));
    setTotalCount(
      addedCards.reduce(function (currentSum, currentItem) {
        return currentSum + currentItem.count;
      }, 0)
    );
  }

  function decrease(card) {
    const newList = addedCards.map((item) => {
      if (item.id === card.id) {
        return {
          ...item,
          count: item.count - 1 >= 1 ? --item.count : 1,
        };
      }
      return item;
    });
    setAddedCards(newList);
    sessionStorage.setItem("addedCards", JSON.stringify(newList));
    setTotalCount(
      addedCards.reduce(function (currentSum, currentItem) {
        return currentSum + currentItem.count;
      }, 0)
    );
  }

  function handleCardAdd(card) {
     if (addedCards.find(item => item.id === card.id)) {
      increase(card);
    } else {
      addedCards.push(card);
    }
    sessionStorage.setItem("addedCards", JSON.stringify(addedCards));
    setAddedCards(addedCards);

    setTotalCount(
      addedCards.reduce(function (currentSum, currentItem) {
        return currentSum + currentItem.count;
      }, 0)
    );
  }

  function handleCardDelete(item) {
    const newCards = addedCards.filter((c) => item.id !== c.id);
    setAddedCards(newCards);
    sessionStorage.setItem("addedCards", JSON.stringify(newCards));
    setTotalCount(totalCount - item.count);
  }

  function countTotal(n) {
    setTotalCount(n);
  }

  return (
    <div className="page__content">
      <Header countAdded={totalCount} />
      <Routes>
        <Route
          path="/"
          element={<Main headphones={headphones} onBtnClick={handleCardAdd} />}
        />
        <Route
          path="basket"
          element={
            <Basket
              onBtnClick={handleCardDelete}
              countTotal={countTotal}
              increase={increase}
              decrease={decrease}
              addedList={addedCards}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
