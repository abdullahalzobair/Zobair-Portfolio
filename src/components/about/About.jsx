import React from 'react';
import './about.css';
import { Meabout } from '../../assets';

const About = () => {
  return (
    <section className="about">
      <div className="about-img">
        <img src={Meabout} />
      </div>
      <div className="about-content">
        <h2 className="heading">About Me</h2>
        <h3>Front-End Developer <br /> based in Chattogram, Bangladesh📍</h3>
        <p>
          Hey, my name is Zobair, and I'm a Frontend Developer.
           My passion is to create and develop website for my users and clients.
           </p>
           <p>
            My main stack currently is JavaScript/React.js in combination with Bootstrap and Tailwind CSS.
           </p>
      </div>
    </section>
  )
}

export default About