import React, { useState } from "react";
import classes from "./Helper.module.css";
import { FaEthereum } from "react-icons/fa";
function Input(props) {
  return (
    <input
      className={classes.input}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
      type={props.type || "text"}
    />
  );
}

export function Deposit(props) {
  const [input, setInput] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    props.toggleSpinner();
    const add = await props.web3.eth.getAccounts();
    await props.instance.methods.deposit().send({
      value: props.web3.utils.toWei(input, "ether"),
      from: add[0],
    });
    props.toggleSpinner();
  };
  return (
    <div className={classes.main}>
      <h3>Deposit Money</h3>
      <Input
        placeholder="Enter the Amount in Ether"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div onClick={submitHandler} className={`buttonDark`}>
        Deposit
      </div>
    </div>
  );
}

export function WithDraw(props) {
  const [input, setInput] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    props.toggleSpinner();

    const add = await props.web3.eth.getAccounts();

    await props.instance.methods
      .withdraw(props.web3.utils.toWei(input, "ether"))
      .send({
        from: add[0],
      });
    props.toggleSpinner();
  };
  return (
    <div className={classes.main}>
      <h3>Withdraw Money</h3>
      <Input
        placeholder="Enter the Amount in Ether"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div onClick={onSubmit} className={`buttonDark`}>
        WithDraw
      </div>
    </div>
  );
}

export function Balance(props) {
  const [data, setData] = useState("0");
  const onSubmit = async (e) => {
    e.preventDefault();
    props.toggleSpinner();
    const add = await props.web3.eth.getAccounts();
    let d = await props.instance.methods.bankBalance(add[0]).call();
    d = props.web3.utils.fromWei(d);
    setData(d);
    props.toggleSpinner();
  };
  return (
    <div className={classes.main}>
      <h3>Check Balance</h3>
      <h1>
        <FaEthereum />
        <span>
          <p>
            <span className={classes.amount}>{data}</span> Ether
          </p>
        </span>
      </h1>
      <div onClick={onSubmit} className={`${classes.btn} buttonDark`}>
        Refresh
      </div>
    </div>
  );
}

export function Transfer(props) {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    props.toggleSpinner();
    const add = await props.web3.eth.getAccounts();

    await props.instance.methods
      .transfer(address, props.web3.utils.toWei(amount, "ether"))
      .send({
        from: add[0],
      });
    props.toggleSpinner();
  };
  return (
    <div className={classes.main}>
      <h3>Transfer Money</h3>
      <Input
        placeholder="Enter the Account Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <Input
        placeholder="Enter the Amount in Ether"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <div onClick={onSubmit} className={`buttonDark`}>
        Transfer
      </div>
    </div>
  );
}
