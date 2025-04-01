import React from "react";
import { useState } from "react";

const Player = ({ name, symbol }) => {
  const [isEditing, setisEditing] = useState(false);
  const [playername, Setplayername] = useState(name);
  let handleClick = () => {
    setisEditing((prevState) => !prevState);
  };
  let handleChange = (e) => {
    Setplayername(e.target.value);
  };
  return (
    <>
      <li>
        <span className="player">
          {isEditing ? (
            <input type="text" value={playername} onChange={handleChange} />
          ) : (
            <span className="player-name">{playername}</span>
          )}
          <span className="player-symbol">{symbol}</span>
        </span>
        {isEditing ? (
          <button onClick={handleClick}>Save</button>
        ) : (
          <button onClick={handleClick}>Edit</button>
        )}
      </li>
    </>
  );
};

export default Player;
