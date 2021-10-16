import React, { useState } from "react";
import classes from "./Dashboard.module.css";
import { FaHome } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import { BsPiggyBank } from "react-icons/bs";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BsCashCoin } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import imgC from "../../assets/dashboard.png";
import Spinner from "../../components/Spinner/Spinner";

// Imports
import { Deposit, WithDraw, Transfer, Balance } from "./Helper";

function Dashboard(props) {
  const [spinner, setSpinner] = useState(false);
  const toggleSpinner = () => {
    setSpinner((prev) => !prev);
  };
  return (
    <div className={classes.dashboard}>
      <div className={classes.container}>
        <div className={classes.box}>
          <NavLink activeClassName={classes.amountActive} to="/dashboard">
            <div className={classes.amount + " " + classes.div}>
              <p>
                <FaHome />
              </p>
            </div>
          </NavLink>
          <div className={classes.controller + " " + classes.div}>
            <NavLink
              activeClassName={classes.activeClass}
              to="/dashboard/deposit"
            >
              <div className={classes.divgrp}>
                <AiOutlineAppstoreAdd />
                <p className={classes.hoverPara}>Deposit</p>
              </div>
            </NavLink>
            <NavLink
              activeClassName={classes.activeClass}
              to="/dashboard/withdraw"
            >
              <div className={classes.divgrp}>
                <BsCashCoin />
                <p className={classes.hoverPara}>WithDraw</p>
              </div>
            </NavLink>
            <NavLink
              activeClassName={classes.activeClass}
              to="/dashboard/accountBalance"
            >
              <div className={classes.divgrp}>
                <BsPiggyBank />
                <p className={classes.hoverPara}>Balance</p>
              </div>
            </NavLink>
            <NavLink
              activeClassName={classes.activeClass}
              to="/dashboard/transfer"
            >
              <div className={classes.divgrp}>
                <BiTransfer />
                <p className={classes.hoverPara}>Transfer</p>
              </div>
            </NavLink>
          </div>
        </div>
        <div className={classes.mainCont}>
          <Switch>
            <Route path="/dashboard" exact>
              <div className={classes.dash}>
                <img alt="" src={imgC} className={classes.dashImg} />
                <h1 className={classes.dashHead}>
                  We got you <span>on the</span> board.
                </h1>
              </div>
            </Route>
            <Route path="/dashboard/deposit" exact>
              <Deposit
                web3={props.web3}
                instance={props.instance}
                toggleSpinner={toggleSpinner}
              />
            </Route>
            <Route path="/dashboard/withdraw" exact>
              <WithDraw
                web3={props.web3}
                instance={props.instance}
                toggleSpinner={toggleSpinner}
              />
            </Route>
            <Route path="/dashboard/accountBalance" exact>
              <Balance
                web3={props.web3}
                instance={props.instance}
                toggleSpinner={toggleSpinner}
              />
            </Route>
            <Route path="/dashboard/transfer" exact>
              <Transfer
                web3={props.web3}
                instance={props.instance}
                toggleSpinner={toggleSpinner}
              />
            </Route>
          </Switch>
        </div>
      </div>
      {spinner && <Spinner />}
    </div>
  );
}

export default Dashboard;
