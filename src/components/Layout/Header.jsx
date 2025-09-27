import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header-bar">
      <div className="logo">Emotional Fitness</div>
      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </header>
  );
}

export default Header;