import './App.css';
import { React } from 'react';

function App() {
  // 주석
    /*
      여러줄 주석
    */
  return (  // 주석
    // 주석
    <> {/* 주석 : 여러줄 일때는 반드시 최상위 태그가 있어야 한다 */}
      <h1>React Test Page</h1>
      <p>오늘부터 리액트 시작</p>
      {/* 최상위 태그 안에서의 주석 */}
      <h3>종료 시간이 다가옵니다</h3>
    </>
  );
}

export default App;
