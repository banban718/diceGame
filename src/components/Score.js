import React, {useState} from "react";
import { MAX_NUMBER_OF_ROLLS } from './constants';
import '../style/style.css';
import Dice from 'react-dice-roll';

const Score = ({ playerName }) => {
    const [currentScore, setCurrentScore] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [rollCount, setRollerCount] = useState(1)

    const rollDice = (val) => {
        if(rollCount > MAX_NUMBER_OF_ROLLS) {
            document.getElementsByClassName("rollDiceButton").disabled = true;
            alert(`You can only roll this button ${MAX_NUMBER_OF_ROLLS} times! Your total score is ${totalScore}`);
            return;
        } else {
            setTotalScore(totalScore + val);
            setCurrentScore(val);
        }
        setRollerCount(rollCount + 1)
    }

    return (
        <div className="scoreTracker">
            <Dice size="125" onRoll={(val) => rollDice(val)}  />
            <div>Welcome {playerName}!</div>
                {currentScore !== 0  ? 
                    (<div>
                        {`${playerName} rolled a ${currentScore}!`}
                        <br/>
                        Total Score: { totalScore } 
                    </div>)
                    : null
                }
        </div>
    )
}

export default Score;