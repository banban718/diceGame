import React from 'react';
import Player from './components/Player';
import blueDice from './img/blueDice.png';
import redDice from './img/redDice.png';
import './style/style.css';

const App = () => {
  return (
    <div className="App">
      <h1 className="App-header">
        <img src={redDice} alt="rolling dice" width="150px"/>
          Squid Game's Rolls on Life
        <img src={blueDice} alt="rolling dice" width="150px"/>
      </h1>
        <div className="squidWallpaper">
          <div className="leftplayer">
            <Player />
          </div>
          <div className="rightplayer">
            <Player />
          </div>
      </div>
    </div>
  );
}

export default App;
