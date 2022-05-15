import * as React from 'react';

import {CellComponent} from "../index";
import {Board} from "../../models/Board";

interface BoardComponentProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent: React.FC<BoardComponentProps> = ({board, setBoard}) => {
  // TODO: BoardComponent
  return (
    <div className="board">
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => (
            <CellComponent
              cell={cell}
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