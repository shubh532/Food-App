import React from "react";
import Meal from "./Meal/MealSummary.js";
import Navbar from "./Components/NavBar.js";
import AvilableMeal from "./Meal/AvailableMeal.js";
function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <main>
        <Meal></Meal>
      </main>
      <AvilableMeal></AvilableMeal>
    </React.Fragment>
  );
}

export default App;
