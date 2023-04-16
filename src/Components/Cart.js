import style from "./Cart.module.css";
import Cart from "../Media/carts.png"
function Card() {
  return (
    <button className={style["Card-Container"]}>
      <img className={style.cartImg} src={Cart} alt="cart"/>
      <span className={style.yourCart}>Your Cart</span>
      <span className={style.buttonCard}>
        0
      </span>
    </button>
  );
}

export default Card;
