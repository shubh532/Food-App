import style from "./meallist.module.css"
export default function MealList(props){
    const price=`$${props.price.toFixed(2)}`
    return(
        <li className={style.list}>
            <div>
                <h3 className={style.name}>{props.name}</h3>
                <div className={style.discription}>{props.discription}</div>
                <div className={style.price}>{price}</div>
            </div>
        </li>
    )
}