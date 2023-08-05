import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';


const App = () => {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login.js" element={<Login />} />
        <Route path="/SignUp.js" element={<SignUp />} />
        <Route path="/Home.js" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
