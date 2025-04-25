import React from "react";

const Logs = ({ turns }) => {
  return (
    <>
      <ol id="log">
        {turns.map((turn, index) => {
          const { square, player } = turn;
          return (
            <li className="highlighted" key={index}>
              <span className="log-player">{player}</span> selected square{" "}
              <span className="log-square">
                {`(${square.row}, ${square.col})`}
              </span>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default Logs;
