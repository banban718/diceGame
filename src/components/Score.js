import React, {useState} from "react";
import { faker } from '@faker-js/faker';
// import * as faker from '@faker-js/faker';
import { MAX_NUMBER_OF_ROLLS, DICE_VALUE } from './constants';
import '../style/style.css';

const Score = ({ playerName }) => {
    const [currentScore, setCurrentScore] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [rollCount, setRollerCount] = useState(1)

    const rollDice = () => {
        if(rollCount > MAX_NUMBER_OF_ROLLS) {
            document.getElementsByClassName("rollDiceButton").disabled = true;
            alert(`You can only roll this button ${MAX_NUMBER_OF_ROLLS} times !!!`);
        } else {
            //Could use Math.ceil and Math random to generate int
            // const numberRolled = faker.datatype.number({
            //     min: DICE_VALUE.MIN, 
            //     max: DICE_VALUE.MAX
            // });
            const numberRolled = 1;
            setTotalScore(totalScore + numberRolled);
            setCurrentScore(numberRolled);
        }
        setRollerCount(rollCount + 1)
    }

    return (
        <div className="scoreTracker">
            <div>Welcome {playerName}!</div>
                <div>
                    <button className="rollDiceButton" onClick={rollDice}>Roll dice</button>
                    {currentScore !== 0  ? 
                        (<div>
                            {`${playerName} rolled a ${currentScore}!`}
                            <br/>
                            Total Score: { totalScore } 
                        </div>)
                        : null
                    }
                </div>
        </div>
    )
}

export default Score;