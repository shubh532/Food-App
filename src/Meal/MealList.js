import style from "./meallist.module.css"
import QuantityForm from "../Form/QuatityForm"
import { useContext } from "react"
import CartContext from "../ContextAPI/CartContext"
export default function MealList(props){
    const Cartctx=useContext(CartContext)
    const price=`$${props.price.toFixed(2)}`
    const onAddToCart=(amount)=>{
        Cartctx.AddItems({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        })
    }


    return(
        <li className={style.list}>
            <div>
                <h3 className={style.name}>{props.name}</h3>
                <div className={style.discription}>{props.discription}</div>
                <div className={style.price}>{price}</div>
            </div>
            <QuantityForm onAddToCart={onAddToCart}></QuantityForm>
        </li>
    )
}