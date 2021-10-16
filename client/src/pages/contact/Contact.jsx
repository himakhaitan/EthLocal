import React from "react";
import classes from "./Contact.module.css";
import imgC from "../../assets/contact.png";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <div className={classes.contact}>
      <div className={classes.container}>
        <div className={classes.primary}>
          <div className={classes.primaryDiv}>
            <h1>
              Adding <span>Care</span> through Calls
            </h1>
            <h3>It's always your call for more.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              nesciunt dolorem praesentium illum repellat, magnam, officia,
              ratione illo odio officiis ipsam velit fugiat modi expedita quidem
              aliquid magni voluptate ut!
            </p>
            <div className={classes.socials}>
              <div className={classes.socialGrp}>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.instagram.com/hima_khaitan"
                >
                  <FaInstagram />
                </a>
              </div>
              <div className={classes.socialGrp}>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/himakhaitan"
                >
                  <FaGithub />
                </a>
              </div>
              <div className={classes.socialGrp}>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/himanshu-khaitan-431666204/"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.secondary}>
          <img src={imgC} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
