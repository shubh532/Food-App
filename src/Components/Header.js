import { Fragment } from "react";
import Style from "./Header.module.css"
import mealImg from "./Meal.jpg"

const Header=()=>{
    return
    <Fragment>
        <header className={Style.header}>
            <h1>React Meal</h1>
            <button>Cart</button>
        </header>
        <div className={Style["main-image"]}>
            <img src={mealImg} alt="Cart"/>
        </div>
    </Fragment>
}


export default Header;