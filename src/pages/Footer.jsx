// ...previous imports
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
      {/* Footer */}
      <footer
        style={{
          width: '100%',
          background: '#e7e1edff',
          color: '#3a2c5b',
          textAlign: 'center',
          padding: '16px 0',
          position: 'fixed',
          bottom: 0,
          left: 0,
          fontSize: 16,
        }}
      >
        &copy; {new Date().getFullYear()} Zen-G Emotional Fitness. All rights reserved.
      </footer>
    </div>
  );
}

export default Footer;