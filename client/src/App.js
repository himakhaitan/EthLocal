import React, { useEffect, useState, Suspense, lazy } from "react";
import getWeb3 from "./getWeb3";
import Bank from "./contracts/Bank.json";
import "./App.css";
import { Switch, Route } from "react-router-dom";

// Components
import Navigation from "./components/Navigation/Navigation";
import Spinner from "./components/Spinner/Spinner";

// Pages
const Home = lazy(() => import("./pages/home/Home"));
const Privacy = lazy(() => import("./pages/privacy/Privacy"));
const About = lazy(() => import("./pages/about/About"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));

const App = () => {
  const [utils, setUtils] = useState({});
  useEffect(() => {
    const main = async () => {
      const fetchedWeb3 = await getWeb3();
      const networkId = await fetchedWeb3.eth.net.getId();
      const deployedNetwork = Bank.networks[networkId];
      const fetchedInstance = new fetchedWeb3.eth.Contract(
        Bank.abi,
        deployedNetwork && deployedNetwork.address
      );
      setUtils({
        instance: fetchedInstance,
        web3: fetchedWeb3,
      });
    };
    try {
      main();
    } catch (err) {
      alert(
        "Failed to load web3, accounts, or contract. Check console for details."
      );
      console.log(err);
    }
  });
  return (
    <div className="App">
      <Suspense fallback={<Spinner />}>
        <Navigation />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Contact} path="/contact" exact />
          <Route component={About} path="/about" exact />
          <Route
            component={() => (
              <Dashboard instance={utils.instance} web3={utils.web3} />
            )}
            path="/dashboard"
          />
          <Route component={Privacy} path="/privacy" exact />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
