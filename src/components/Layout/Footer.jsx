import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        width: '100%',
        background: '#e7e1edff',
        color: '#3a2c5b',
        textAlign: 'center',
        padding: '16px 0',
        position: 'relative',
        fontSize: 16,
      }}
    >
      &copy; {new Date().getFullYear()} Zen-G Emotional Fitness. All rights reserved.
    </footer>
  );
};

export default Footer;