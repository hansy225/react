import './App.css';
import MemberEnroll from './component/Member-enroll';
import Counter from './count/Counter';
import LightOnOff from './component/Light-on-off';

function App() {
  return (
    <div className="App">
      <MemberEnroll/>
      <hr/> 
      <Counter/>
      <hr/> <br/>
      <LightOnOff/>
    </div>
  );
}

export default App;
