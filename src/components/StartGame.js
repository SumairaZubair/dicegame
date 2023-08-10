import '../components/startGame.css'
import dice  from '../IMG/dice.jpg'

const StartGame = ({toggle}) => {
  return (
    <div className="container">
      <div className="img">
        <img src={dice} alt="dice" />
      </div>
      <div className="content">
        <h1 className="dice">Dice Game</h1>
        <button  onClick={toggle} className="playNow" >Play Now</button>
      </div>
    </div>
  );
};

export default StartGame;


  
 
