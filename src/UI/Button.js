import style from "./button.module.css"
function Button(props){
    return(
        <button className={style.btn} {...props.BtnAttributes}>{props.children}</button>
    )
}

export default Button;