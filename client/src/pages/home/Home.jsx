import React from "react";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className={classes.home}>
      <div className={classes.primary}>
        <div className={classes.primaryCont}>
          <h1>banking that Suits You Better</h1>
          <h3>What Email is to Postal, ETHLOCAL is to Banking</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
            eveniet quas aperiam facere dolorem, fuga necessitatibus fugit
            expedita nemo iure!
          </p>
          <Link to="/dashboard">
            <div className="buttonDark">Get Started</div>
          </Link>
        </div>
      </div>
      <div className={classes.secondary}></div>
    </div>
  );
}
