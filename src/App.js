import React from "react";
import Meal from "./Meal/MealSummary.js";
import Navbar from "./Components/NavBar.js";
function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <main>
        <Meal></Meal>
      </main>
    </React.Fragment>
  );
}

export default App;
