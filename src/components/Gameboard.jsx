import React from "react";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const Gameboard = () => {
  return (
    <>
      <ol id="game-board">
        {initialBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button>{playerSymbol}</button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
};

export default Gameboard;
