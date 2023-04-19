import classes from "./CartItems2.module.css";
import Modal2 from "./Modal2";
import { useContext } from "react";
import CartContext from "../ContextAPI/CartContext";
import CartItems from "../Components/CartItems";
function CartItem2(props) {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.TotalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const AddItemsHandler=(Item)=>{
    cartCtx.AddItems({...Item, amount:1})
  }

  const RemoveItemsHandler=(id)=>{
    cartCtx.removeItems(id)
  }



  const Items = cartCtx.items.map((Item) => (
    <CartItems
      key={Item.id}
      name={Item.name}
      price={Item.price}
      amount={Item.amount}
      onAdd={AddItemsHandler.bind(null,Item)}
      onRemove={RemoveItemsHandler.bind(null,Item.id)}
    ></CartItems>
  ));

  return (
    <Modal2 onClick={props.onClick}>
      <div className={classes.CartContainer}>
        <h3 className={classes.heading}>Cart Items</h3>
        <ol className={classes.list}>{Items}</ol>
        <div className={classes.TotalAmount}>
          <span className={classes.span1}>Total Amount </span>
          <span className={classes.span2}>{totalAmount}</span>
        </div>
        <div className={classes.buttons}>
          <button className={classes.button1} onClick={props.onClick}>
            Close
          </button>
          {hasItems && <button className={classes.button2}>Order</button>}
        </div>
      </div>
    </Modal2>
  );
}

export default CartItem2;
