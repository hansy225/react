import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

// 컴포넌트들 import
import Navbar from './components/Navbar/Navbar';  
import Main from './page/Main/main';  
import Calories from './page/Calories/calories';  
import Challenge from './page/Challenge/challenge';  
import Exercise from './page/Exercise/exercise';  
import Community from './page/Community/pages/Community';  
import Calendar from './page/Calendar/calendar';  
import MyInfo from './page/MyInfo/myinfo';  
import Login from './page/Login/login';  
import SignUp from './page/SignUp/SignUp';  
import Write from './page/Community/pages/Write';  
import Detail from './page/Community/pages/Detail';  
import MyPost from "./page/Community/pages/MyPost";
import Edit from "./page/Community/pages/Edit";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthLoaded, setIsAuthLoaded] = useState(false);
  const [userId, setUserId] = useState(null);  // ✅ userId 상태 유지

  useEffect(() => {
    const storedLogin = localStorage.getItem('isLoggedIn');
    const storedUserId = localStorage.getItem('userId');

    if (storedLogin === 'true') {
      setIsLoggedIn(true);
    }
    if (storedUserId) {
      setUserId(storedUserId);
    }

    setIsAuthLoaded(true);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userId');
    setUserId(null);
  };

  if (!isAuthLoaded) return <div>로딩 중...</div>;

  return (
    <Router>
      <Navbar
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
        isAuthLoaded={isAuthLoaded}
      />
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/main" replace /> : <Login setIsLoggedIn={handleLogin} setUserId={setUserId} />}
        />
        <Route path="/" element={isLoggedIn ? <Navigate to="/main" replace /> : <Login setIsLoggedIn={handleLogin} setUserId={setUserId} />} />
        <Route path="/main" element={isLoggedIn ? <Main /> : <Navigate to="/" replace />} />
        <Route path="/signup" element={<SignUp setIsLoggedIn={handleLogin} />} />
        <Route path="/calendar" element={isLoggedIn ? <Calendar userId={userId} /> : <Navigate to="/" replace />} />
        <Route path="/calories" element={isLoggedIn ? <Calories userId={userId} /> : <Navigate to="/" replace />} />
        <Route path="/challenge" element={isLoggedIn ? <Challenge /> : <Navigate to="/" replace />} />
        <Route path="/exercise" element={isLoggedIn ? <Exercise /> : <Navigate to="/" replace />} />
        <Route path="/community" element={isLoggedIn ? <Community /> : <Navigate to="/" replace />} />
        <Route path="/post/:id" element={isLoggedIn ? <Detail /> : <Navigate to="/" replace />} />
        <Route path="/myinfo" element={isLoggedIn ? <MyInfo /> : <Navigate to="/" replace />} />
        <Route path="/write" element={isLoggedIn ? <Write /> : <Navigate to="/" replace />} />
        <Route path="/mypost" element={<MyPost />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
