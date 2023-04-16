import MealList from "./MealList";
import Card from "../UI/Card";
import style from "./AvailableMeal.module.css"
const Meal = [
  {
    id: Math.random(),
    name: "Gulab Jamun",
    discription: "Sweet Dish",
    price: 120,
  },
  {
    id: Math.random(),
    name: "Gulab Jamun",
    discription: "Sweet Dish",
    price: 120,
  },
  {
    id: Math.random(),
    name: "Gulab Jamun",
    discription: "Sweet Dish",
    price: 120,
  },
  {
    id: Math.random(),
    name: "Gulab Jamun",
    discription: "Sweet Dish",
    price: 120,
  },
];

const AvilableMeal = () => {
  const MealItems = Meal.map((meal) => (
    <MealList
      key={meal.id}
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
