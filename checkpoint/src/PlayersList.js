import React from "react";
import Player from "./Player";
import players from "./players";
import 'bootstrap/dist/css/bootstrap.min.css';

const PlayersList = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
