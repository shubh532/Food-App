import { useState } from "react";
import Meal from "./Meal/MealSummary.js";
import Navbar from "./Components/NavBar.js";
import CartItem2 from "./Extra Components/CartItems2.js";
import AvilableMeal from "./Meal/AvailableMeal.js";
import CartProvider from "./ContextAPI/CartProvider.js";
function App() {
  const [ShowCart, UnShowCart] = useState(false);

  const showCartBtnHandle = () => {
    UnShowCart(true);
  };

  const UnCartBtnHandle = () => {
    UnShowCart(false);
  };
  const UpdateCartValue=(itemQuatity)=>{
    console.log(itemQuatity)
  }

  return (
    <CartProvider UpdateCartValue={UpdateCartValue} >
      {ShowCart && <CartItem2 onClick={UnCartBtnHandle}></CartItem2>}
      <Navbar onClick={showCartBtnHandle}></Navbar>
      <main>
        <Meal></Meal>
      </main>
      <AvilableMeal></AvilableMeal>
    </CartProvider>
  );
}

export default App;
