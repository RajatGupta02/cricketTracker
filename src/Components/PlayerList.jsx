import React from 'react';
import './PlayerList.css'
const shuffle = (array) => { 
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  } 
  return array; 
}; 

const PlayerList = ({ players,  setBattingOrder }) => {

  const handleShuffle = () => {
    const newOrder = shuffle(players);
    setBattingOrder(newOrder);
  };

  return (
      <div class="d-flex flex-nowrap justify-content-center auto">
      <button class='button-74' onClick={handleShuffle}>Set Order</button>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            {player.name}
          </li>
        ))}
      </ul>
      </div>
  );
};

export default PlayerList;
