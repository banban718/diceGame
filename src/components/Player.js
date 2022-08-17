import React, { useState } from "react";
import Dice from './Dice';
import { faker } from '@faker-js/faker';

const Player = () => {
    const [playerName, setPlayerName] = useState("")
    const [isPlayerNameDisplayed, setIsPlayerNameDisplayed] = useState(false);

    const [currentScore, setCurrentScore] = useState(0);
    const [totalScore, setTotalScore] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsPlayerNameDisplayed(!isPlayerNameDisplayed);
    }
    
    // const rollDice = () => {
    //     const roll = faker.datatype.number({min: 1, max: 6});
    //     console.log("fake", roll)
    //     setCurrentScore(roll);
    //     setTotalScore(totalScore + currentScore);
    // }

    return (
        <div>
        { isPlayerNameDisplayed && playerName.length > 0 ? 
            (
                <div>
                    <div>Welcome {playerName}!</div>
                    {/* <div>Current Roll: {currentScore}</div> */}
                    {/* <div>Total Score: {totalScore}</div> */}
                    <Dice playerName={playerName} />
                    {/* <button onClick={rollDice}>Roll dice</button> */}
                </div>
            )
        : 
            ( <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name={playerName}
                        id="name"
                        placeholder={playerName ? "Enter name": playerName}
                        onChange={e => setPlayerName(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>)
        }
        </div>
    )
}

export default Player;