import style from "./Cart.module.css";
import CartImg from "../Media/carts.png"
function Cart(props) {
  return (
    <button className={style["Cart-Container"]} onClick={props.onClick}>
      <img className={style.cartImg} src={CartImg} alt="cart"/>
      <span className={style.yourCart}>Your Cart</span>
      <span className={style.buttonCard}>
        0
      </span>
    </button>
  );
}

export default Cart;
