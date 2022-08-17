import React, { useState } from "react";


const Player = () => {
    const [playerOne, setPlayerOne] = useState("")
    const [isPlayerNameDisplayed, setIsPlayerNameDisplayed] = useState(false);
    const [score, setScore] = useState(0);
    let currentRoll = 0;

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsPlayerNameDisplayed(!isPlayerNameDisplayed);
    }
    
    const rollDice = () => {
        console.log(score + Math.ceil(Math.random() * 6))
        currentRoll = Math.ceil(Math.random() * 6)
        setScore(score + currentRoll)
    }

    return (
        <div>
        { isPlayerNameDisplayed && playerOne.length > 0 ? 
            (
                <div>
                    <div>Welcome {playerOne}!</div>
                    <div>Score: {score}</div>
                    <button onClick={rollDice}>Roll dice</button>
                    {currentRoll > 0 ? `Dice rolle ${currentRoll}`: null}
                </div>
            )
        : 
            ( <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name={playerOne}
                        id="name"
                        placeholder={playerOne ? "Enter name": playerOne}
                        onChange={e => setPlayerOne(e.target.value)}
                    />
                    <button type="submit">Submit form</button>
                </form>
            </div>)
        }
        </div>
    )
}



export default Player;