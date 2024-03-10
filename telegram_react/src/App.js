import './App.css';
import GameStart from './views/GameStart';


let initDataFields =  window.Telegram.WebApp.initData;

function App() {
  return (
    <div className="App">
      <h1>{initDataFields}</h1>
      <GameStart/>
    </div>
  );
}

export default App;
