import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Profile from '../pages/Profile';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Home from '../pages/Home';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        {/* Add other routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;