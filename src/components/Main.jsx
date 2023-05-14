import Card from "./Card";

function Main(props) {
  return (
    <div className="wrapper">
      <h2 className="cards__category">Наушники</h2>
      <ul className="cards__list">
        {props.headphones.map((card) => {
          if (!card.wireless) {
            return (
              <Card
                key={card.id}
                card={card}
                name={card.name}
                link={card.link}
                price={card.price}
                previousPrice={card.previousPrice}
                rate={card.rate}
                onBtnClick={props.onBtnClick}
              />
            );
          } else return null;
        })}
      </ul>
      <h2 className="cards__category">Беспроводные наушники</h2>
      <ul className="cards__list">
        {props.headphones.map((card) => {
          if (card.wireless) {
            return (
              <Card
                key={card.id}
                card={card}
                name={card.name}
                link={card.link}
                price={card.price}
                previousPrice={card.previousPrice}
                rate={card.rate}
                onBtnClick={props.onBtnClick}
              />
            );
          } else return null;
        })}
      </ul>
    </div>
  );
}

export default Main;
