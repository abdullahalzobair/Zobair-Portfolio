import React, { useState } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
import { Menu, Close } from '../../assets';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (  
    <nav className="navbar">
      <NavLink to="/" className='logo'>ZOBAIR</NavLink>
      <img src={toggle ? Close : Menu} alt="Menu" className='menu-icon' onClick={() => setToggle(!toggle)}/>
      <div className={`navlinks ${toggle ? 'active' : ''}`}>
        <NavLink to="/" onClick={() => setToggle(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setToggle(false)}>About</NavLink>
        <NavLink to="/projects" onClick={() => setToggle(false)}>Projects</NavLink>
        <NavLink to="/contact" onClick={() => setToggle(false)}>Contact</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;

