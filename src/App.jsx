import Gameboard from "./components/Gameboard";
import Player from "./components/Player";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const selectBoardSqaure = () => {
    setActivePlayer((prevState) => (prevState === "X" ? "O" : "X"));
  };
  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              name="Player 1"
              symbol="X"
              isActive={activePlayer === "X"}
            />
            <Player
              name="Player 2"
              symbol="O"
              isActive={activePlayer === "O"}
            />
          </ol>
          <Gameboard
            selectSquare={selectBoardSqaure}
            activePlayerSymbol={activePlayer}
          />
        </div>
        Log
      </main>
    </>
  );
}

export default App;
