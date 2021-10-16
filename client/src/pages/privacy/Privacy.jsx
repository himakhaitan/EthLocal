import React from "react";
import classes from "./Privacy.module.css";
import { Link } from "react-router-dom";

function Privacy() {
  return (
    <div className={classes.privacy}>
      <div className={classes.container}>
        <h1>Privacy Policy</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sint,
          deserunt, qui at consectetur corrupti cupiditate dignissimos nisi
          earum maiores fuga, itaque reiciendis blanditiis sunt amet optio
          voluptatum eius assumenda omnis adipisci. Molestiae, velit. Laboriosam
          necessitatibus numquam, ipsam consequatur suscipit ducimus et
          consectetur iste fugit dignissimos officia ipsum. Illo, sunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sint,
          deserunt, qui at consectetur corrupti cupiditate dignissimos nisi
          earum maiores fuga, itaque reiciendis blanditiis sunt amet optio
          voluptatum eius assumenda omnis adipisci.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sed
          est praesentium esse suscipit beatae veritatis sequi eos cumque sit
          rem quaerat delectus consequatur corrupti ex, id neque ipsa enim
          aliquam autem rerum tempora quo. Fuga distinctio delectus similique
          dicta?
        </p>
        <Link to="/">
          <div className="buttonDark">Go Back to Home</div>
        </Link>
      </div>
    </div>
  );
}

export default Privacy;
