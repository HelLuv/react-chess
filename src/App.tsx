import * as React from 'react';

import {BoardComponent, LostFigures} from "./components";
import "./App.css";
import {Board} from "./models/Board";
import {Player} from "./models/Player";
import {Colors} from "./models/Colors";
import Timer from "./components/Timer";

const App = () => {
  const [board, setBoard] = React.useState<Board>(new Board());
  const [whitePlayer] = React.useState<Player>(new Player(Colors.WHITE));
  const [blackPlayer] = React.useState<Player>(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = React.useState<Player | null>(null);

  React.useEffect(() => {
    restart();
  }, []);

  const restart = () => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
    setCurrentPlayer(whitePlayer);
  };

  const swapPlayer = () => {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
  }

  return (
    <div className="app">
      <Timer
        currentPlayer={currentPlayer}
        restart={restart}
      />
      <BoardComponent
        setBoard={setBoard}
        board={board}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <div>
        <LostFigures
          figures={board.lostBlackFigures}
          title="Black Figures"
        />
        <LostFigures
          figures={board.lostWhiteFigures}
          title="White Figures"
        />
      </div>
    </div>
  );
}

export default App;
