// 내 정보
import React, { useState } from 'react';
import './myinfo.css';

const MyInfo = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [userInfo, setUserInfo] = useState({
    id: 'health_user',
    name: '홍길동',
    birth: '1990-01-01',
    gender: '남성',
    height: '170',
    weight: '65',
    goalWeight: '60',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditToggle = () => {
    if (isEditable) {
      const { height, weight, goalWeight } = userInfo;
      const numberRegex = /^[0-9]+$/;

      if (!height || !weight || !goalWeight) {
        alert('값을 모두 입력해주세요.');
        return;
      }

      if (!numberRegex.test(height) || !numberRegex.test(weight) || !numberRegex.test(goalWeight)) {
        alert('숫자만 입력해주세요.');
        return;
      }

      alert('정보가 수정되었습니다!');
    }

    setIsEditable((prev) => !prev);
  };

  return (
    <div className="myinfo-container">
      <div className="myinfo-box">
        <h2 className="myinfo-title">내 프로필</h2>

        <div className="myinfo-form">
          <div className="info-group">
            <label>아이디</label>
            <input type="text" value={userInfo.id} disabled />
          </div>
          <div className="info-group">
            <label>이름</label>
            <input type="text" value={userInfo.name} disabled />
          </div>
          <div className="info-group">
            <label>생년월일</label>
            <input type="text" value={userInfo.birth} disabled />
          </div>
          <div className="info-group">
            <label>성별</label>
            <input type="text" value={userInfo.gender} disabled />
          </div>
          <div className="info-group">
            <label>키</label>
            <input
              type="text"
              name="height"
              value={userInfo.height}
              disabled={!isEditable}
              onChange={handleChange}
            />
          </div>
          <div className="info-group">
            <label>몸무게</label>
            <input
              type="text"
              name="weight"
              value={userInfo.weight}
              disabled={!isEditable}
              onChange={handleChange}
            />
          </div>
          <div className="info-group">
            <label>목표 몸무게</label>
            <input
              type="text"
              name="goalWeight"
              value={userInfo.goalWeight}
              disabled={!isEditable}
              onChange={handleChange}
            />
          </div>
        </div>

        <button className="edit-button" onClick={handleEditToggle}>
          {isEditable ? '수정 완료' : '내 정보 수정하기'}
        </button>
      </div>
    </div>
  );
};

export default MyInfo;
