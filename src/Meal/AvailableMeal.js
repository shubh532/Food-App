import MealList from "./MealList";
import Card from "../UI/Card";
import style from "./AvailableMeal.module.css"
const Meal = [
  {
    id: Math.random(),
    name: "Gulab Jamun",
    discription: "Sweet Dish",
    price: 120.35,
  },
  {
    id: Math.random(),
    name: "Rass Gulla",
    discription: "Sweet Dish",
    price: 250.65,
  },
  {
    id: Math.random(),
    name: "Jalebi",
    discription: "Sweet Dish",
    price: 400.956,
  },
  {
    id: Math.random(),
    name: "Mithai",
    discription: "Sweet Dish",
    price: 500.125,
  },
];

const AvilableMeal = () => {
  const MealItems = Meal.map((meal) => (
    <MealList
      key={meal.id}
      id={meal.id}
      name={meal.name}
      discription={meal.discription}
      price={meal.price}
    ></MealList>
  ));
  return (
    <section>
      <Card>
        <ul className={style.list}>{MealItems}</ul>
      </Card>
    </section>
  );
};

export default AvilableMeal;
