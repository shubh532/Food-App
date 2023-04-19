import style from "./QuatityForm.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useRef } from "react";
function QuantityForm(props) {
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    props.onAddToCart(enteredAmountNumber)
  };
  return (
    <form className={style.Form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label={"Amount"}
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "10",
          defaultValue: "1",
        }}
      ></Input>
      <Button BtnAttributes={{ type: "submit" }}>+ADD</Button>
    </form>
  );
}

export default QuantityForm;
