import * as React from 'react';
import {Cell} from "../../models/Cell";

interface CellComponentProps {
  cell: Cell;
}

const CellComponent: React.FC<CellComponentProps> = ({cell}) => {
  // TODO: CellComponent
  return (
    <div className={['cell', cell.color].join(' ')}>
      {cell.figure?.logo && <img src={cell.figure.logo} alt={cell.figure.name}/>}
    </div>
  )
};

export default React.memo<CellComponentProps>(CellComponent);
