import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import '../components/totalScore.css'
import RollDice from "./RollDice"
import { useState } from "react"
import '../components/button.css'
import Rules from "./Rules"
const GamePlay = ()=>{
  const [score , setScore]=useState(0)
   const [selectedNum, setSelectedNum] = useState(null);
  const [ currentDice , setCurrentDice] = useState(1)
const [error, setError] = useState('')
const [showRules , setShowRules] = useState(false)
  const generateNumber = (min , max)=>{
    return Math.floor( Math.random()*(max-min)+min)
}
const rolDice = () => {
  if (!selectedNum) {
    setError('You have not selected any number');
    return;
  }

  setError('');

  const randomNumber = generateNumber(1, 7);
  setCurrentDice((prev) => randomNumber);

  if (selectedNum === randomNumber) {
    setScore((prev) => prev + randomNumber);
  } else {
    setScore((prev) => prev - 2);
  }
  setSelectedNum(undefined);
};
 const resetScore =()=>{
  setScore(0)
 }


    return(
        <div className="main">
          <div className="top">
          <TotalScore score={score}/>
           <NumberSelector error={error} selectedNum={selectedNum}
           setSelectedNum={setSelectedNum}
           />
          
          </div>
          <RollDice currentDice={currentDice} rolDice={rolDice}/>
          <div className="btn">
            <button onClick={resetScore} >Reset</button>
            <button onClick={()=> setShowRules((prev)=>!prev)}>{showRules ? "Hide" : "Show"} rules</button>

          </div>
          { showRules && <Rules/>}
        </div>
    )
}

export default GamePlay