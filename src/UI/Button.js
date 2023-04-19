import style from "./button.module.css"
function Button(props){
    return(
        <button className={style.btn} onClick={props.onClick} {...props.BtnAttributes}>{props.children}</button>
    )
}

export default Button;