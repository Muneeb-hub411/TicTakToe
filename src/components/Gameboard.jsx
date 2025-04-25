const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const Gameboard = ({ selectSquare, turns }) => {
  let gameboard = initialBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameboard[row][col] = player;
  }

  //   // const [GameBoard, setGameBoard] = useState(initialBoard);

  //   // const handleBoard = (rowIndex, colIndex) => {
  //   //   setGameBoard((prevBoard) => {
  //   //     const updatedBoard = prevBoard.map((row) => [...row]);
  //   //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //   //     return updatedBoard;
  //   //   });
  //   //   selectSquare();
  //   // };

  return (
    <>
      <ol id="game-board">
        {gameboard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button
                    onClick={() => {
                      selectSquare(rowIndex, colIndex);
                    }}
                  >
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
