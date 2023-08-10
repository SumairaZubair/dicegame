import { useState } from 'react'
import '../components/roolDice.css'
// import dice_1 from '../IMG/dice_1 (1).png'
const RollDice =({currentDice, rolDice})=>{
    // const [score, setScore] =useState()
    // const [ currentDice , setCurrentDice] = useState(1)

//     const generateNumber = (min , max)=>{
//         return Math.floor( Math.random()*(max-min)+min)
//     }
// const rolDice =()=>{
//     const randomNumber = generateNumber(1,7)
//     setCurrentDice((prev)=>randomNumber)
// }        
    
    return(
        <div className="diceContainer">
            <div className='dice1'  onClick={rolDice}>
                <img src={require(`../IMG/pics/dice_${currentDice}.png`)}/>
                {/* <img src={`IMG/dice_1 (1).png`}/> */}
            </div>
            <p>Click on Dice to roll</p>
            </div>
    )
}

export default RollDice