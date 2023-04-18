import classes from "./CartItems2.module.css";
import Modal2 from "./Modal2";
function CartItem2(props) {
  const Items = [
    {
      id: Math.random(),
      name: "Gulab Jamun",
      discription: "Sweet Dish",
      price: 120,
    },
    {
      id: Math.random(),
      name: "Gulab Jamun",
      discription: "Sweet Dish",
      price: 120,
    },
    {
      id: Math.random(),
      name: "Gulab Jamun",
      discription: "Sweet Dish",
      price: 120,
    },
    {
      id: Math.random(),
      name: "Gulab Jamun",
      discription: "Sweet Dish",
      price: 120,
    },
  ].map((Item) => (
    <li>
      <span className={classes.span1}>{Item.name} </span>
      <span className={classes.span2}>{Item.price} </span>
    </li>
  ));

  return (
    <Modal2>
      <div className={classes.CartContainer}>
        <h3 className={classes.heading}>Cart Items</h3>
        <ol className={classes.list}>{Items}</ol>
        <div className={classes.TotalAmount}>
          <span className={classes.span1}>Total Amount </span>
          <span className={classes.span2}>2500</span>
        </div>
        <div className={classes.buttons}>
          <button className={classes.button1}>Close</button>
          <button className={classes.button2}>Order</button>
        </div>
      </div>
    </Modal2>
  );
}

export default CartItem2;
