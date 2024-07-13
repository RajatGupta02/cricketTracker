import React from 'react';
import { Button } from 'react-bootstrap';
import './UpdatePlayers.css';


const UpdatePlayer = ({ updateBatsman, updateBowler }) => {
  return (
    <>
    <button class="over" onClick={updateBatsman}>Out!!</button>
    <button class="over" onClick={updateBowler}>Over Complete</button>
    </>
  );
};

export default UpdatePlayer;
