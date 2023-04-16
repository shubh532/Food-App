import style from "./QuatityForm.module.css"
function QuantityForm(){
    return(
        <form className={style.Form}>
            <div className={style["inp-container"]}>
            <label className={style.Qlabel}>Amount</label>
            <input className={style.Qinput} type="number" value="1"/>
            </div>
            <button className={style.addbtn}>+Add</button>
        </form>
    )
}

export default QuantityForm;