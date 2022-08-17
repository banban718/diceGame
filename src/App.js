import React, {useState} from 'react';

import './App.css';
import Player from './Player';
import Dice from './Dice';


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
      <Dice />
    </div>
  );
}

export default App;
