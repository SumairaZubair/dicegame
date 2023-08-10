import '../components/totalScore.css'
const TotalScore =({score})=>{
    return(
        <div className="scorecontainer">
                <h1>{score}</h1>
                <p>Total Score</p>
            </div>
    )
}

export default TotalScore