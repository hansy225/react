import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import './CalorieChart.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const CalorieChart = ({ userId }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    console.log("👤 userId:", userId);
    if (!userId) return;

    fetch(`http://localhost:8080/foods/total-calories?userId=${userId}`)
      .then(res => {
        console.log("🌐 응답 상태 코드:", res.status);
        return res.json();
      })
      .then(data => {
        console.log("📦 받은 데이터:", data);

        if (Array.isArray(data)) {
          const labels = data.map(item => item.logDate);
          const caloriesConsumed = data.map(item => item.totalCalories);

          console.log("📅 라벨(날짜):", labels);
          console.log("🔥 섭취 칼로리:", caloriesConsumed);

          setChartData({
            labels,
            datasets: [
              {
                label: '섭취 칼로리',
                data: caloriesConsumed,
                borderColor: '#2f80ed',
                backgroundColor: 'rgba(47, 128, 237, 0.2)',
                fill: true,
                tension: 0.4,
              },
            ],
          });
        } else {
          console.error("❌ 서버에서 받은 데이터가 배열이 아닙니다:", data);
        }
      })
      .catch(err => {
        console.error('🚨 데이터 요청 실패:', err);
      });
  }, [userId]);

  if (!chartData) return <div>차트를 불러오는 중입니다...</div>;

  return (
    <div className="calorie-chart-container">
      <Line
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: 'top',
            },
            title: {
              display: false,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: '칼로리 (kcal)',
              },
            },
            x: {
              title: {
                display: true,
                text: '날짜',
              },
            },
          },
        }}
      />
    </div>
  );
};

export default CalorieChart;
