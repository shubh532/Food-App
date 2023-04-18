import style from "./button.module.css"
function Button(props){
    return(
        <button {...props.BtnAttributes}>{props.children}</button>
    )
}

export default Button;