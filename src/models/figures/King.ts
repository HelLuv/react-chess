import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from "../../assets/black-king.png";
import whiteLogo from "../../assets/white-king.png";

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }


  canMove(target: Cell): boolean {
    if (!super.canMove(target))
      return false;

    // if you copied this please put a star / если ты скопировал это поставь пожалуйста звезду (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧
    const absX = Math.abs(target.x - this.cell.x);
    const absY = Math.abs(target.y - this.cell.y);

    if (absY > 1 || absX > 1)
      return false;


    return true;
  }
}