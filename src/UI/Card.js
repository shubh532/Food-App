import style from "./Card.module.css"
function Card(props){

    return (
        <div className={style.CardContainer} >
            {props.children}
        </div>
    )
}

export default Card;