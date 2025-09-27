import React, { useState } from 'react';
import Login from './Login';

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return (
    <div className="home-page">
      <button onClick={handleLoginClick}>Login</button>
      {showLogin && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={handleCloseLogin}>×</button>
            <Login onClose={handleCloseLogin} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;