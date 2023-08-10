// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import StartGame from './components/StartGame';
import GamePlay from './components/GamePlay';

function App() {
  
  const [isGame,setIsGame] =useState(false)
  const toggleGameplay =() =>{

    setIsGame((prev)=>!prev)
  }
  return (
    <div className="App">
    {
      isGame ? <GamePlay/>: <StartGame 
      toggle={toggleGameplay}/>
    }
      {/* <StartGame/> */}
    </div>
  );
}

export default App;
