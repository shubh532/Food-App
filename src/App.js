import React from "react";
import Meal from "./Meal/MealSummary.js";
import Navbar from "./Components/NavBar.js";
import CartItem2 from "./Extra Components/CartItems2.js";
import AvilableMeal from "./Meal/AvailableMeal.js";
import CartItems from "./Components/CartItem.js";
function App() {
  return (
    <React.Fragment>
      <CartItem2></CartItem2>
      {/* <CartItems></CartItems> */}
      <Navbar></Navbar>
      <main>
        <Meal></Meal>
      </main>
      <AvilableMeal></AvilableMeal>
      
    </React.Fragment>
  );
}

export default App;
