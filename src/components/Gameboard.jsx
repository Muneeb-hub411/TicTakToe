import React, { useState } from "react";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const Gameboard = ({ selectSquare, activePlayerSymbol }) => {
  const [GameBoard, setGameBoard] = useState(initialBoard);

  const handleBoard = (rowIndex, colIndex) => {
    setGameBoard((prevBoard) => {
      const updatedBoard = prevBoard.map((row) => [...row]);
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });
    selectSquare();
  };

  return (
    <>
      <ol id="game-board">
        {GameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button onClick={() => handleBoard(rowIndex, colIndex)}>
                    {playerSymbol}
                  </button>
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
