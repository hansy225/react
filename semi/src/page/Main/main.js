import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CalorieChart from '../../components/CalorieChart/CalorieChart';
import MealCaloriesChart from '../../components/CalorieChart/MealCaloriesChart';
import './main.css';

const Main = () => {
  const [user, setUser] = useState(null);
  const [mealCalories, setMealCalories] = useState(null);
  const [userId, setUserId] = useState(null); // 별도로 상태로 관리

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    console.log("📦 localStorage userId:", storedUserId);
    
    if (!storedUserId) {
      console.error("userId가 localStorage에 없습니다.");
      return;
    }

    setUserId(storedUserId); // ⬅️ 상태로 저장

    // 사용자 정보 가져오기
    axios.get(`http://localhost:8080/users/${storedUserId}`)
      .then(res => {
        console.log("사용자 정보:", res.data);
        setUser(res.data);
      })
      .catch(err => {
        console.error("사용자 정보를 불러오는 데 실패했습니다:", err);
      });

    // 오늘 식사별 칼로리 가져오기
    const today = new Date().toISOString().split('T')[0];
    axios.get(`http://localhost:8080/food-logs/meal-calories?userId=${storedUserId}&date=${today}`)
      .then(res => {
        console.log("식사별 칼로리:", res.data);
        setMealCalories(res.data);
      })
      .catch(err => {
        console.error('식사별 칼로리 불러오기 실패:', err);
      });
  }, []);

  if (!userId) return <div>로그인이 필요합니다.</div>; // userId 없을 때
  if (!user) return <div>로딩 중...</div>;

  const remainingCalories = (user.caloriesConsumed || 0) - (user.caloriesBurned || 0);

  return (
    <div className="main-container">
      {/* 사용자 정보 */}
      <div className="user-info">
        키 : {user.height}cm | 현재 몸무게 : {user.weight}kg | 목표 몸무게 : {user.goalWeight}kg | 
        도전 점수 : {user.challengeScore}점 | 잔여 칼로리 : {remainingCalories}kcal
      </div>

      {/* 캐릭터 이미지 */}
      <img src="/tiger.png" alt="호랑이" style={{ width: '150px', margin: '1rem 0' }} />

      {/* 칼로리 차트 */}
      <div className="charts">
        <div className="chart-section">
          <h4>섭취 & 운동 칼로리</h4>
          <CalorieChart userId={user.userId} />
        </div>

        <div className="chart-section">
          <h4>아침/점심/저녁 칼로리</h4>
          <MealCaloriesChart data={mealCalories} />
        </div>

        <div className="burn-info">
          <h4>오늘 소모한 칼로리</h4>
          <p>🔥 총 소모 칼로리: {user.caloriesBurned || 0} kcal</p>
        </div>
      </div>

      {/* 오늘 운동 */}
      <div className="today-exercise">
        오늘 한 운동:
        <img src="/icon1.png" alt="운동1" />
        <img src="/icon2.png" alt="운동2" />
        <img src="/icon3.png" alt="운동3" />
      </div>
    </div>
  );
};

export default Main;
