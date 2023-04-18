import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal2.module.css";
function Backdrop() {
  return <div className={classes.Backdrop}></div>;
}

function ModalOverlay(props) {
  return <div>{props.children}</div>;
}

const parentElement = document.getElementById("OverLay");

const Modal2 = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop></Backdrop>, parentElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        parentElement
      )}
    </Fragment>
  );
};
export default Modal2;
