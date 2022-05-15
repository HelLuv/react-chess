import * as React from 'react';

import {CellComponent} from "../index";
import {Board} from "../../models/Board";
import {Cell} from "../../models/Cell";

interface BoardComponentProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent: React.FC<BoardComponentProps> = ({board, setBoard}) => {
  const [selectedCell, setSelectedCell] = React.useState<Cell | null>(null);

  const onCellClick = (cell: Cell) => {
    if (cell.figure) {
      setSelectedCell(cell);
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
    <div className="board">
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => (
            <CellComponent
              cell={cell}
              onCellClick={onCellClick}
              selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
              key={cell.id}
            />
          ))}
        </React.Fragment>
      ))

      }
    </div>
  )
};

export default React.memo<BoardComponentProps>(BoardComponent);