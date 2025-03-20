import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Felipe Fonseca</Link>
      </div>
      <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/about" className="nav-item">Sobre</Link>
        <Link to="/projects" className="nav-item">Projetos</Link>
        <Link to="/contact" className="nav-item">Contato</Link>
      </div>
      <div className="navbar-burger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;