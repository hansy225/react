// src/page/SignUp.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'; 

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birth, setBirth] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setError('유효한 이메일 주소를 입력해주세요.');
      return;
    }

    console.log('회원가입 정보:', { username, email, password });
    alert('회원가입이 완료되었습니다!');
    navigate('/login');
  };

  const handleCancel = () => {
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <div className="signup-box">

      <h2 className="title">회원가입</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="signup-group">
            <label>아이디</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
            <button type="button" className="check-button">중복확인</button>
          </div>

          <div className="signup-group">
            <label>이메일</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>

          <div className="signup-group">
            <label>비밀번호</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>

          <div className="signup-group">
            <label>비밀번호 확인</label>
            <input 
              type="password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
            />
          </div>

          <div className="signup-group">
            <label>생년월일</label>
            <input 
              type="text" 
              value={birth} 
              onChange={(e) => setBirth(e.target.value)} 
              required 
            />
          </div>

          <div className="signup-group">
            <label>성별</label>
            <select>
              <option value="">선택</option>
              <option value="male">남성</option>
              <option value="female">여성</option>
              <option value="other">기타</option>
            </select>
          </div>

          {error && <p className="error-message">{error}</p>}

          <div className="signup-button-group">
          <button className="cancel-button" onClick={() => navigate('/login')}>취소</button>
          <button className="signup-button">회원가입</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
