import { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [players, setPlayers] = useState([]);
  const [finalPlayers, setFinalPlayers] = useState([]);
  const handleClick = () => {
    if (players.indexOf(name) >= 0) return;
    setPlayers((prev) => {
      return [...prev, name];
    });
    setName("");
  };
  const handleAddClick = () => {
    if (finalPlayers.indexOf(name) >= 0) return;
    setFinalPlayers((prev) => {
      return [...prev, name];
    });
  };
  const handleDeleteClick = (value) => {
    const newPlayers = [...finalPlayers];
    const mPlayers = newPlayers.filter((el, i) => el !== value);
    setFinalPlayers(mPlayers);
  };
  return (
    <div className="App">
      <input
        type="text"
        name="players"
        placeholder="enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
      {/* master team */}
      <h1>Master team</h1>
      <div>
        {players.length > 0
          ? players.map((el, i) => (
              <ul style={{ display: "flex" }}>
                <li>{el}</li>
                <button onClick={() => handleAddClick(el)}>Add</button>
                <button onClick={() => handleDeleteClick(el)}>Delete</button>
              </ul>
            ))
          : "no players added"}
      </div>
      {/* final team */}
      <h1>final team</h1>
      <div>
        {finalPlayers.length > 0
          ? finalPlayers.map((el, i) => (
              <ul style={{ display: "flex" }}>
                <li>{el}</li>
              </ul>
            ))
          : "No players added"}
      </div>
    </div>
  );
}
