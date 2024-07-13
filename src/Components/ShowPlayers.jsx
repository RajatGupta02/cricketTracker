import React from 'react';

const ShowPlayers = ({players}) => {
    return(
    <div>
        <h3>Player List</h3>
        <ul>
          {players.map((player, index) => (
            <li key={index}>{index + 1}. {player.name}</li>
          ))}
        </ul>
      </div>
    );
};

export default ShowPlayers;