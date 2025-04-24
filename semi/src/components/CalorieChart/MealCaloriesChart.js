import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';

const MealCaloriesChart = ({ data }) => {

  if (!data || data.length === 0) {
    return <p>오늘 기록된 식사가 없습니다.</p>;
  }

  return (
    <div style={{ width: '100%', height: 300 }}>
      <h3 style={{ textAlign: 'center' }}>오늘의 식사별 칼로리</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="meal" />
          <YAxis label={{ value: 'kcal', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="calories" fill="#3f528c" name="칼로리" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MealCaloriesChart;
