import React from "react";
import "./Navbar.css";
import Card from "./Card";
import mealimg from "./Meal.jpg"
function Navbar() {
  return (
    <React.Fragment>
      <div className="NavBar-Container">
        <h2>React Meal</h2>
        <Card></Card>
      </div>
      <div className="main-image">
        <img src={mealimg} alt="Cart" />
      </div>
    </React.Fragment>
  );
}

export default Navbar;
