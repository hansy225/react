import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    navigate('/myinfo');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-circle">
          로그인 후 이용 가능합니다.
        </div>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <label>아이디</label>
            <input type="text" />
          </div>

          <div className="input-group">
            <label>비밀번호</label>
            <input type="password" />
          </div>

          <div className="button-group">
          <button>로그인</button>
          <button onClick={() => navigate('/signup')}>회원가입</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
