import './App.css';
import { React } from 'react';

const user = {
  firstName : 'Hong',
  lastName : 'GilDong'
};

function Student(u) {
  return u.firstName + ' ' +u.lastName;
}

function App() {
  const isStudent = true;
  return (
    <div className="App">
      <h1>Start React 2025 Tjoeun</h1>
      <h3>Component 실습</h3>

      {isStudent ? <h4>{Student(user)}님 환영합니다.</h4> : <h4>학원생이 아닙니다.</h4>}

      {/* <Com1></Com1>
      <Com1/>
      <Com1/> */}
    </div>
  );
}
/*
function Com1() {
  return {
    <>
      <h1>[THIS IS COMPONENT]</h1>
      <p>고용노동부 k-digital 취업 캠프</p>
      <ul>
        <li>java</li>
        <li>oracle</li>
        <li>spring boot</li>
        <li>react</li>
      </ul>
    </>
  }
}
  */

export default App;
