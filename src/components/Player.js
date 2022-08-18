import React, { useState } from "react";
import Score from './Score';
import '../style/style.css';

const Player = () => {
    const [playerName, setPlayerName] = useState("")
    const [isPlayerNameDisplayed, setIsPlayerNameDisplayed] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsPlayerNameDisplayed(!isPlayerNameDisplayed);
    }
    
    return (
        <div className="scoreTracker">
        { isPlayerNameDisplayed && playerName.length > 0 ? 
            (
                <div >
                    <Score playerName={playerName} />
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