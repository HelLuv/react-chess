import * as React from 'react';
import {Cell} from "../../models/Cell";

interface CellComponentProps {
  cell: Cell;
  selected: boolean;
  onCellClick: (cell: Cell) => void;
}

const CellComponent: React.FC<CellComponentProps> = ({cell, selected, onCellClick}) => {
  // TODO: CellComponent
  return (
    <div
      className={[
        'cell',
        cell.color,
        selected ? "selected" : "",
        cell.available && cell.figure ? "availableWithFigure" : "",
      ].join(' ')}
      onClick={() => onCellClick(cell)}
    >
      {cell.available && !cell.figure && <div className={"available"}/>}
      {cell.figure?.logo && <img src={cell.figure.logo} alt={cell.figure.name}/>}
    </div>
  )
};

export default React.memo<CellComponentProps>(CellComponent);
