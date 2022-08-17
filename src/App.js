import React, {useState} from 'react';

import './App.css';
import Player from './Player';


const App = () => {

  return (
    <div className="App">
      <h1>Squid Game's Rolls Dice on Life</h1>
      <Player />
      <Player />
    </div>
  );
}

export default App;
