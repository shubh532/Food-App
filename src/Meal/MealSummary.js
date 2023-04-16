import Style from "./Meal.module.css"
function Meal(){
    return(
    <section className={Style.Meal}>
        <h1 className={Style.heading}>Delicious Food, Delivered To You</h1>
        <p>Choose your favouirte meal from our board selection of Avilable meal and Enjoy a delicious lunch or dinner at home</p>
        <p>
            All oue meal are coocked with high-quality ingreadients, just-in time and of course by experienced chefs
        </p>
    </section>
    )
}

export default Meal;