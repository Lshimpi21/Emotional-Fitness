import React, { useState } from 'react';
import logo from './assets/logo02.png';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // Modernized navigation items
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Career', href: '#career' },
    { name: 'Resources', href: '#resources' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="App">
      {/* Header */}
      <header
        className="App-header"
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '420px',
        }}
      >
        {/* Top Header Bar */}
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px 32px',
            background: '#e7e1edff',
            color: '#3a2c5b',
            borderRadius: '0 0 16px 16px',
            boxSizing: 'border-box',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 3,
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="logo02" style={{ width: 48, height: 48, marginRight: 12 }} />
            <span style={{ fontWeight: 'bold', fontSize: 22 }}> Emotional Fitness</span>
          </div>
          {/* Modernized Navigation */}
          <nav>
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                style={{
                  margin: '0 14px',
                  color: '#3a2c5b',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '18px',
                  letterSpacing: '0.5px',
                  transition: 'color 0.2s',
                }}
                onMouseOver={e => (e.target.style.color = '#7c6ca7')}
                onMouseOut={e => (e.target.style.color = '#3a2c5b')}
              >
                {item.name}
              </a>
            ))}
          </nav>
          {/* User Section */}
          <div>
            {!loggedIn ? (
              <>
                <button
                  style={{ marginRight: 8, padding: '6px 16px', borderRadius: 6, border: 'none', background: '#3a2c5b', color: '#fff', cursor: 'pointer' }}
                  onClick={() => setLoggedIn(true)}
                >
                  Login
                </button>
                <button
                  style={{ padding: '6px 16px', borderRadius: 6, border: 'none', background: '#7c6ca7', color: '#fff', cursor: 'pointer' }}
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                <span style={{ marginRight: 12 }}>Welcome, User!</span>
                <button
                  style={{ padding: '6px 16px', borderRadius: 6, border: 'none', background: '#3a2c5b', color: '#fff', cursor: 'pointer' }}
                  onClick={() => setLoggedIn(false)}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </header>
    </div>
    )};

    export default Navbar;