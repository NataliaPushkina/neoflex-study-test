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
          count: item.count - 1 > 1 ? --item.count : 1,
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
    // let addedCards = JSON.parse(sessionStorage.getItem("addedCards"));
    console.log('before add', addedCards);
    let newList = [];
    if (addedCards === []) {
      newList.push(card);
      setAddedCards(newList);
      sessionStorage.setItem("addedCards", JSON.stringify(newList));
      console.log(addedCards);
    } else {
      
      setAddedCards(newList);
      sessionStorage.setItem("addedCards", JSON.stringify(newList));
    }

    // setAddedCards([card, ...addedCards]);
    // sessionStorage.setItem('addedCards', JSON.stringify([card, ...addedCards]));

    setTotalCount(
      addedCards.reduce(function (currentSum, currentItem) {
        return currentSum + currentItem.count;
      }, 0)
    );
    // setTotalCount(totalCount + 1);
    console.log("add", addedCards);
  }

  function handleCardDelete(item) {
    const cards = JSON.parse(sessionStorage.getItem("addedCards"));
    const newCards = cards.filter((c) => item.id !== c.id);
    sessionStorage.setItem("addedCards", JSON.stringify(newCards));
    setTotalCount(totalCount - 1);
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
