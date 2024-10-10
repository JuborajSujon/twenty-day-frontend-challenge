import { useState } from "react";

const Team = () => {
  const [players, setPlayers] = useState(11);
  const teamStyle = {
    border: "1px solid black",
    padding: "10px",
    margin: "10px",
    borderRadius: "10px",
  };
  return (
    <div style={teamStyle}>
      <h1>Players : {players}</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setPlayers(players + 1)}>
        Add Player
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setPlayers(players - 1)}>
        Remove Player
      </button>
    </div>
  );
};

export default Team;
