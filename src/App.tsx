import * as React from 'react';

import {BoardComponent} from "./components";
import "./App.css";
import {Board} from "./models/Board";

const App = () => {
  const [board, setBoard] = React.useState<Board>(new Board());

  React.useEffect(() => {
    restart();
  }, []);

  const restart = () => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  };


  return (
    <div className="app">
      <BoardComponent
        setBoard={setBoard}
        board={board}
      />
    </div>
  );
}

export default App;
