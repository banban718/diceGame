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
            ( <div >
                <form onSubmit={handleSubmit} >
                    <input
                        className="nameInput"
                        type="text"
                        name={playerName}
                        id="name"
                        placeholder={"Enter name"}
                        onChange={e => setPlayerName(e.target.value)}
                    />
                    <button className="nameButton" type="submit">Submit</button>
                </form>
            </div>)
        }
        </div>
    )
}

export default Player;