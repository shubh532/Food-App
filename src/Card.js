import "./Card.css";
import ButtonCard from "./ButtonCard";
import Cart from "./carts.png";
function Card() {
  return (
    <div className="Card-Container">
      <img className="cartImg" src={Cart} alt="cart" width={"100"} height={"100"} />
      <button>Your Cart</button>
      <ButtonCard></ButtonCard>
    </div>
  );
}

export default Card;
