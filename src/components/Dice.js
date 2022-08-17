import React, {useState} from "react";
import { faker } from '@faker-js/faker';
import blueDice from '../img/blueDice.png';
import redDice from '../img/redDice.png';

const Dice = ({playerName}) => {
    const [currentScore, setCurrentScore] = useState(0);
    const [totalScore, setTotalScore] = useState(0);

    const rollDice = () => {
        const roll = faker.datatype.number({min: 1, max: 6});
        console.log("fake", roll)
        setCurrentScore(roll);
        setTotalScore(totalScore + currentScore);
    }

    return (
        <div>
            <div className="dice">
                <img src={blueDice} alt="rolling dice" width="150px"/>
                <button onClick={rollDice}>Roll dice</button>
        
            </div>

            {currentScore !== 0  ? 
                (<div>
                    <h4>{`${playerName} rolled a ${currentScore}!`}</h4>
                    <div>Total Score: {Math.max(currentScore, totalScore)}</div> 
                </div>)
                : null
            }
        </div>

    )
}

export default Dice;