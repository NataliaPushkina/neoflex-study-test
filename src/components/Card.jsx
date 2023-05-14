import star from "../images/star.svg";

function Card(props) {

  function handleAddClick() {
    props.onBtnClick(props.card);
  }

  function setPreviousPrice() {
    if (props.previousPrice) {
      return `${props.previousPrice} ₽`;
    } else {
      return "";
    }
  }

  return (
    <li className="card">
      <img src={props.link} alt={props.name} className="card__image" />
      <div className="card__caption">
        <h2 className="card__title">{props.name}</h2>
        <div className="card__price">
          {`${props.price} ₽`}
          <span className="card__price-previous">{setPreviousPrice()}</span>
        </div>
        <div className="card__rate-container">
          <img src={star} alt="star" className="card__rate" />
          {props.rate}
        </div>
        <button type="button" className="card__button" onClick={() => handleAddClick()}>
          Купить
        </button>
      </div>
    </li>
  );
}

export default Card;
