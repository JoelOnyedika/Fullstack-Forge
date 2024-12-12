import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginUaP from './pages/LoginUaP' //username and password 
import LoginOAuth from './pages/LoginOAuth'
import SignupUaP from './pages/SignupUaP' //username and password 
import userSelection from "./lib/setup"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {userSelection.authentication.authMethod !== "OAuth" ? <Route path="/login" element={<LoginUaP />} /> : <Route path="/login" element={<LoginOAuth />} /> }

        {userSelection.authentication.authMethod !== "OAuth" ? <Route path="/signup" element={<SignupUaP />} /> : <Route path="/signup" element={<LoginOAuth />} /> }
        
      </Routes>
    </Router>
  );
};

export default App;