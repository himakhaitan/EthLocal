import React from "react";
import classes from "./About.module.css";
import imgA from "../../assets/eth.png";
const About = () => {
  return (
    <div className={classes.about}>
      <div className={classes.container}>
        <div className={classes.primary}>
          <img src={imgA} alt="Ethereum" />
        </div>
        <div className={classes.secondary}>
          <h1>
            We are giving <span>future</span> wings : ETHLOCAL
          </h1>
          <h3>It’s banking 2.0, a huge huge huge deal.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            nesciunt dolorem praesentium illum repellat, magnam, officia,
            ratione illo odio officiis ipsam velit fugiat modi expedita quidem
            aliquid magni voluptate ut!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            officia nesciunt! Sequi omnis facere possimus dolore ipsam incidunt
            sunt magni aliquam perferendis minima earum, porro libero
            voluptatibus, cumque recusandae alias minus ad enim animi. Ea
            laboriosam praesentium nisi sunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
