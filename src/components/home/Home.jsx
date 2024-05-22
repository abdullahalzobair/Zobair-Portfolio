import React, { useEffect } from "react";
import Typed from "typed.js";
import { HomeSocials } from "../../components";
import { Me } from "../../assets";
import "./home.css";

const Home = () => {
  useEffect(() => {
    const typed = new Typed(".multiple-text", {
      strings: [
        "Front-End Developer",
        "MERN Stack Developer",
        "Content Creator",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section className="home">
      <div className="home-content">
        <h3>Hello, It's ME</h3>
        <h1>
          Abdullah Al Zobair <span className="wave">👋</span>
        </h1>
        <h3>
          And I'm <span className="multiple-text"></span>
        </h3>
        <p>Technology is my passion and I love 'Travelling' so much.</p>
        <HomeSocials />
      </div>
      <div className="home-img">
        <img src={Me} alt="Zobair's Photo" />
      </div>
    </section>
  );
};

export default Home;
