// src/App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Navbar from './components/Navbar';

import Calories from './page/Calories/calories';
import Challenge from './page/Challenge/challenge';
import Exercise from './page/Exercise/exercise';
import Community from './page/Community/community';
import Calendar from './page/Calendar/calendar';
import MyInfo from './page/MyInfo/myinfo';
import Login from './page/Login/login';
import SignUp from './page/SignUp/SignUp';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('isLoggedIn');
    if (stored === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
      
        <Route path="/" element={<Navigate to="/calendar" />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/calories" element={<Calories />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/community" element={<Community />} />
        <Route path="/login" element={<Login setIsLoggedIn={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />

      
        <Route
          path="/myinfo"
          element={isLoggedIn ? <MyInfo /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
