import React, { useState } from "react";
import "./calories.css";

const foodData = [
  { name: "사과", calorie: 52 },
  { name: "아몬드", calorie: 575 },
  { name: "달걀", calorie: 68 },
  { name: "현미밥", calorie: 150 },
  { name: "닭가슴살", calorie: 165 },
];

export default function CalorieTracker() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [meals, setMeals] = useState({
    아침: [],
    점심: [],
    저녁: [],
  });

  const handleSearch = (e) => {
    const keyword = e.target.value;
    setSearch(keyword);
    if (keyword.trim() === "") {
      setSearchResults([]);
      return;
    }

    const filtered = foodData.filter((food) =>
      food.name.includes(keyword)
    );
    setSearchResults(filtered);
  };

  const addFoodToMeal = (meal, food) => {
    setMeals((prev) => ({
      ...prev,
      [meal]: [...prev[meal], food],
    }));
    setSearch("");
    setSearchResults([]);
  };

  const removeFoodFromMeal = (meal, index) => {
    setMeals((prev) => ({
      ...prev,
      [meal]: prev[meal].filter((_, i) => i !== index),
    }));
  };

  const getTotalCalories = () => {
    return Object.values(meals)
      .flat()
      .reduce((total, food) => total + food.calorie, 0);
  };

  return (
    <div className="container">
      <h2>섭취 칼로리</h2>

      <input
        type="text"
        placeholder="음식 검색"
        value={search}
        onChange={handleSearch}
      />

      <div>
        {searchResults.map((food, idx) => (
          <div className="search-result" key={idx}>
            <span>{food.name} - {food.calorie}kcal</span>
            <div className="search-result-buttons">
              {["아침", "점심", "저녁"].map((meal) => (
                <button
                  key={meal}
                  onClick={() => addFoodToMeal(meal, food)}
                >
                  {meal}에 추가
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="meal-grid">
        {["아침", "점심", "저녁"].map((meal) => (
          <div className="meal-square" key={meal}>
            <h3>{meal}</h3>
            <div className="meal-items">
              {meals[meal].map((food, idx) => (
                <div key={idx} className="food-item">
                  <span>{food.name}</span>
                  <button
                    className="delete-button"
                    onClick={() => removeFoodFromMeal(meal, idx)}
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="meal-square total-calories-box">
          총 칼로리: {getTotalCalories()} kcal
        </div>
      </div>
    </div>
  );
}
