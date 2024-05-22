import React from "react";
import "./about.css";
import { Meabout } from "../../assets";

const About = () => {
  return (
    <section className="about">
      <div className="about-img">
        <img src={Meabout} />
      </div>
      <div className="about-content">
        <h2 className="heading">About Me</h2>
        <h3>
          MERN Stack Developer <br /> based in Chattogram, Bangladesh📍
        </h3>
        <p>
          Hey, my name is Zobair, and I'm a MERN Stack Developer. My passion is
          to provide the best websites and help clients bring their projects to
          life.
        </p>
        <p>
          My main stack currently includes HTML, CSS, Bootstrap, and Tailwind
          CSS, along with JavaScript, React.js, Node.js, Express.js, and
          MongoDB.
        </p>
      </div>
    </section>
  );
};

export default About;
