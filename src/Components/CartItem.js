import Modal from "../UI/Modal";
import classes from "./CartItems.module.css"

function CartItems(props) {
  const Items = (
    <ul>
      {[
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
      ].map((items) => (
        <li>{items.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {Items}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default CartItems;
