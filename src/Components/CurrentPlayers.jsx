import React from 'react';


const CurrentPlayers = ({ currentBatsman, currentBowler }) => {
  return (
    <div>
      <h2>Current Players</h2>
      <p>Batsman: {currentBatsman ? currentBatsman.name : 'N/A'}</p>
      <p>Bowler: {currentBowler ? currentBowler.name : 'N/A'}</p>
    </div>
  );
};

export default CurrentPlayers;
