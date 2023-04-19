import style from "./Cart.module.css";
import CartImg from "../Media/carts.png";
import CartContext from "../ContextAPI/CartContext";
import { useContext } from "react";
function Cart(props) {
  const CartCtx = useContext(CartContext);


  const numberOfCartItems=CartCtx.items.reduce((currentNo,item)=>{
    return currentNo+item.amount
  },0)
  
  return ( 

    <button className={style["Cart-Container"]} onClick={props.onClick}>
      <img className={style.cartImg} src={CartImg} alt="cart" />
      <span className={style.yourCart}>Your Cart</span>
      <span className={style.buttonCard}>{numberOfCartItems}</span>
    </button>
  );
}

export default Cart;
