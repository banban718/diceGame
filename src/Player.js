import React, { useState } from "react";


const Player = () => {
    const [playerOne, setPlayerOne] = useState("")
    const [isPlayerNameDisplayed, setIsPlayerNameDisplayed] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('render', playerOne)

        setIsPlayerNameDisplayed(!isPlayerNameDisplayed);
    }
    console.log('isPlayerNameDisplayed', isPlayerNameDisplayed)
    console.log('playerOne.length', playerOne.length)
    return (
        <div>
        { isPlayerNameDisplayed && playerOne.length > 0 ? 
            (
                <div>Welcome {playerOne}!</div>
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