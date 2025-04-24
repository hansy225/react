import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Login/login.css"; // Login 스타일 적용

const Login = ({ setIsLoggedIn, setUserId }) => {
  const navigate = useNavigate();
  const [inputId, setInputId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("입력된 ID:", inputId);
    console.log("입력된 비밀번호:", password);

    try {
      const res = await axios.get(`http://localhost:8080/users/${inputId}`);
      const user = res.data;

      if (!user) {
        alert("사용자를 찾을 수 없습니다.");
      } else if (user.passwordHash !== password) {
        console.log("비밀번호 불일치", user.passwordHash, password); // 디버깅용
        alert("비밀번호가 틀렸습니다.");
      } else {
        localStorage.setItem('userId', user.userId);
        setUserId(user.userId); // App.js로 상태 전달
        setIsLoggedIn(true);
        alert(`${user.name}님 반갑습니다!`);
        navigate('/main');
      }
    } catch (error) {
      if (error.response?.status === 404) {
        alert("사용자를 찾을 수 없습니다.");
      } else {
        console.error("로그인 실패:", error);
        alert("로그인 중 오류가 발생했습니다. 다시 시도해주세요.");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-circle">로그인 후<br />이용 가능</div>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>아이디</label>
            <input
              type="text"
              value={inputId}
              onChange={(e) => setInputId(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>비밀번호</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">로그인</button>
          <button
            type="button"
            className="signup-button"
            onClick={() => navigate('/signup')}
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
