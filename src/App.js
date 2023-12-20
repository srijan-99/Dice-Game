import React, { useState } from 'react';
import Startgame from './Components/StartGame.jsx';
import GamePlay from './Components/GamePlay.jsx';

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  
  //function
  const toggleGamePlay=()=>{
    setIsGameStarted((prev)=>!prev);
  }

  return (
    <>
     {isGameStarted ? <GamePlay/> :<Startgame toggle={toggleGamePlay}/>}
    </>
  );
};

export default App;
