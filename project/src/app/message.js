/*
The Message component expects to be passed...
- state: a game state string (plr1,plr2,plr1won,plr2won,draw)

The component will then render an appropriate message.
*/

import React from 'react';

export default function Message({state}){
  let output;
  if (state === 'plr1') {
    output = `Player 1`;
} else if (state === 'plr2') {
    output = `Player 2`;
} else if (state === 'plr1won') {
    output = `Player 1 won`;
} else if (state === 'plr2won') {
    output = `Player 2 won`
} else if (state === "draw") {
    output = `It's a draw`
}

  return (
    <div>
      <h4>Information</h4>
      <div>{output}</div>
  </div>
  );
}
