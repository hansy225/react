/*
  * state
   : 내부에서 변경 가능한 데이터를 다루기 위해 사용하는 객체
     js에서는 변수에 담지만 리액트에서는 useState()라는 리액트 함수 사용
  
  * 특징
   : 
*/

import './App.css';
import Counter from './component/Counter';
import LightOnOff from './component/Light-on-off';

function App() {
  return (
    <div className="App">
      <Counter/>
      <hr/> <br/>
      <LightOnOff/>
    </div>
  );
}

export default App;
