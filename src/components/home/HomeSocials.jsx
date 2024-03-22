import React from 'react'
import './home.css';
import { SiUpwork } from "react-icons/si";
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebook, FaGithub } from "react-icons/fa";

const HomeSocials = () => {
  return (
    <div className="social-media">
      <a href="https://www.upwork.com/freelancers/~01ee3d3d078613b4b3" target='_blank'><SiUpwork /></a>
      <a href="https://www.linkedin.com/in/abdullah-al-zobair" target='_blank'><FaLinkedin /></a>
      <a href="https://www.instagram.com/abdullah_al_zobair" target='_blank'><FaInstagram /></a>
      <a href="https://www.youtube.com/@TechHackedZobair" target='_blank'><FaYoutube /></a>
      <a href="https://www.facebook.com/ZobairAlAbdulla" target='_blank'><FaFacebook /></a>
      <a href="https://github.com/zobair2000" target='_blank'><FaGithub /></a>
     </div>
  )
}

export default HomeSocials