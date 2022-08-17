import React from 'react';
import './App.css';
import Player from './components/Player';

const App = () => {
  return (
    <div className="App">
      <h1>Squid Game's Rolls Dice on Life</h1>
      <div className="nameColumn">
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
