import React from "react";
import Style from "./Navbar.module.css"
import Cart from "./Cart"
import mealimg from "../Media/Meal.jpg"
function Navbar(props) {
  return (
    <React.Fragment>
      <header className={Style["NavBar-Container"]}>
        <h2>React Meal</h2>
        <Cart onClick={props.onClick}></Cart>
      </header>
      <div className={Style["main-image"]}>
        <img src={mealimg} alt="Cart" />
      </div>
    </React.Fragment>
  );
}

export default Navbar;
