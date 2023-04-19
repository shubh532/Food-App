import classes from "./CartItems3.module.css"
function CartItems(props){
    return(
        <li>
        <div className={classes.ItemContainer}>
          <h3>{props.name} </h3>
          <div>
          <span className={classes.span2}>${props.price}  </span>
          <span className={classes.NoOfItems}>x{props.amount}</span>
          </div>
        </div>
        <div className={classes.buttons}>
          <button className={classes.button1} onClick={props.onRemove}>
            -
          </button>
          <button onClick={props.onAdd} className={classes.button2}>+</button>
        </div>
      </li>
    )
}
export default CartItems;