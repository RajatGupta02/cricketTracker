import React from 'react';

const UpdatePlayer = ({ updateBatsman, updateBowler }) => {
  return (
    <>
    <button onClick={updateBatsman}>Out!!</button>
    <button onClick={updateBowler}>Over Complete</button>
    </>
  );
};

export default UpdatePlayer;
