import Gameboard from "./components/Gameboard";
import Player from "./components/Player";
import Logs from "./components/Logs";
import { WINNING_COMBINATIONS } from "./winnng-combinations";
import GameOver from "./components/GameOver";
import { useState } from "react";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(turns) {
  let currentPlayer = "X";
  if (turns.length > 0 && turns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  // ✅ Create a fresh copy of the board
  let gameboard = initialBoard.map((row) => [...row]);

  // ✅ Fill board from turns
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameboard[row][col] = player;
  }

  // ✅ Determine winner
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const first = gameboard[combination[0].row][combination[0].column];
    const second = gameboard[combination[1].row][combination[1].column];
    const third = gameboard[combination[2].row][combination[2].column];

    if (first && first === second && first === third) {
      winner = first;
    }
  }

  const hasDrawn = gameTurns.length === 9 && !winner;

  // ✅ Prevent selecting an already filled square
  const selectBoardSqaure = (rowIndex, colIndex) => {
    if (gameboard[rowIndex][colIndex] || winner) {
      return;
    }

    setGameTurns((prevState) => {
      const currentPlayer = deriveActivePlayer(prevState);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevState,
      ];
      return updatedTurns;
    });
  };

  // ✅ Rematch resets turns
  const rematch = () => {
    setGameTurns([]);
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>

        {(winner || hasDrawn) && (
          <GameOver winner={winner} rematchgame={rematch} />
        )}

        <Gameboard selectSquare={selectBoardSqaure} board={gameboard} />
      </div>

      <Logs turns={gameTurns} />
    </main>
  );
}

export default App;
