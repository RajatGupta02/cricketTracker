import React, { useState } from 'react';

const PlayerList = ({ players, setBattingOrder }) => {
  const [order, setOrder] = useState(players.map((_, index) => index));

  const handleOrderChange = (index, value) => {
    const newOrder = [...order];
    newOrder[index] = parseInt(value, 10);
    setOrder(newOrder);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBattingOrder(order.map((i) => players[i]));
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {players.map((player, index) => (
          <li key={player.id}>
            {player.name} - Order: 
            <input
              type="number"
              value={order[index]}
              onChange={(e) => handleOrderChange(index, e.target.value)}
              min="0"
              max={players.length - 1}
              required
            />
          </li>
        ))}
      </ul>
      <button type="submit">Set Batting Order</button>
    </form>
  );
};

export default PlayerList;
