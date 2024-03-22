import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-text">
      <p>Copyright &copy; {new Date().getFullYear()}. Abdullah Al Zobair | All rights are reserved.</p>
    </div>
  </footer>
  )
}

export default Footer