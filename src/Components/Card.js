import style from "./Card.module.css";
import ButtonCard from "./ButtonCard";
import Cart from "../Media/carts.png"
function Card() {
  return (
    <div className={style["Card-Container"]}>
      <img className={style.cartImg} src={Cart} alt="cart" width={"100"} height={"100"} />
      <button>Your Cart</button>
      <ButtonCard></ButtonCard>
    </div>
  );
}

export default Card;
