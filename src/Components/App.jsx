import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayerForm from './PlayerForm';
import PlayerList from './PlayerList';
import CurrentPlayers from './CurrentPlayers';
import UpdatePlayers from './UpdatePlayers';

const App = () => {
  const [players, setPlayers] = useState([]);
  const [battingOrder, setBattingOrder] = useState([]);
  const [bowlingOrder, setBowlingOrder] = useState([]);
  const [currentBatsmanIndex, setCurrentBatsmanIndex] = useState(0);
  const [currentBowlerIndex, setCurrentBowlerIndex] = useState(0);

  const addPlayer = (name) => {
    const newPlayer = {name, id: players.length};
    setPlayers([...players, newPlayer]);
  };

  const battingOrderFunc = (order) => {
    setBattingOrder(order);
    var revOrder = order.map(a => ({...a}));
    revOrder = revOrder.reverse();
    setBowlingOrder(revOrder);
  };

  const batsmanOut = () => {
    setCurrentBatsmanIndex((prevIndex) => prevIndex + 1);
  };

  const overComplete = () => {
    setCurrentBowlerIndex((prevIndex) => (prevIndex + 1)%players.length);
    if (bowlingOrder[currentBowlerIndex] === battingOrder[currentBatsmanIndex]){
      setCurrentBowlerIndex((prevIndex) => (prevIndex + 1)%players.length);
    }
  };

  const currentBatsman = battingOrder[currentBatsmanIndex];
  const currentBowler = bowlingOrder[currentBowlerIndex];

  return (
    <div>
      <h1>
        Tuk Tuk Cricket
      </h1>
      <PlayerForm addPlayer={addPlayer}/>
      <PlayerList players = {players}  setBattingOrder = {battingOrderFunc} />
      <CurrentPlayers currentBatsman={currentBatsman} currentBowler={currentBowler} />
      <UpdatePlayers updateBatsman = {batsmanOut} updateBowler = {overComplete} />
    </div>
  )
}

export default App;
