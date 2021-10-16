import React from "react";
import ReactDOM from "react-dom";
import classes from "./Spinner.module.css";
import { FaEthereum } from "react-icons/fa";

function Data() {
  return (
    <div className={classes.overlay}>
      <FaEthereum className={classes.icon} />
      <FaEthereum className={classes.icon + " " + classes.colorPrimary} />
      <FaEthereum className={classes.icon + " " + classes.colorDark} />
    </div>
  );
}

const Spinner = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Data />, document.getElementById("spinnerRoot"))}
    </React.Fragment>
  );
};

export default Spinner;
