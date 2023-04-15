import React from "react";
import Style from "./Navbar.module.css"
import Card from "./Card";
import mealimg from "../Media/Meal.jpg"
function Navbar() {
  return (
    <React.Fragment>
      <header className={Style["NavBar-Container"]}>
        <h2>React Meal</h2>
        <Card></Card>
      </header>
      <div className={Style["main-image"]}>
        <img src={mealimg} alt="Cart" />
      </div>
    </React.Fragment>
  );
}

export default Navbar;
