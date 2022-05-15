import * as React from 'react';

import {CellComponent} from "../index";
import {Board} from "../../models/Board";
import {Cell} from "../../models/Cell";
import {Player} from "../../models/Player";

interface BoardComponentProps {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  swapPlayer: () => void;
}

const BoardComponent: React.FC<BoardComponentProps> = ({board, setBoard, swapPlayer, currentPlayer}) => {
  const [selectedCell, setSelectedCell] = React.useState<Cell | null>(null);

  const onCellClick = (cell: Cell) => {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell);
      swapPlayer();
      setSelectedCell(null);
    } else {
      if (cell.figure?.color === currentPlayer?.color) {
        setSelectedCell(cell);
      }
    }
  };

  React.useEffect(() => {
    highlightCells();
  }, [selectedCell])

  const highlightCells = () => {
    board.highlightCells(selectedCell);
    updateBoard();
  }

  const updateBoard = () => {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }

  return (
    <div>
      <h3>Current Player: {currentPlayer?.color.toUpperCase()}</h3>
      <div className="board">
        {board.cells.map((row, index) => (
          <React.Fragment key={index}>
            {row.map((cell) => (
              <CellComponent
                cell={cell}
                onCellClick={onCellClick}
                selected={!!(cell.x === selectedCell?.x && cell.y === selectedCell?.y && cell?.figure)}
                key={cell.id}
              />
            ))}
          </React.Fragment>
        ))
        }
      </div>
    </div>
  )
};

export default React.memo<BoardComponentProps>(BoardComponent);