import style from "./QuatityForm.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";
function QuantityForm() {
  return (
    <form className={style.Form}>
      <Input
        label={"Amount"}
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "10",
          defaultValue: "1",
        }}
      ></Input>
      <Button BtnAttributes={{type:"submit"}}>+ADD</Button>
    </form>
  );
}

export default QuantityForm;
