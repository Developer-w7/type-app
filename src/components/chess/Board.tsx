import BoardModel from "../../models/BoardModel";
import SquareModel from "../../models/SquareModel";
import Square from "./Square";


interface Props{
    board:BoardModel,
    playingAsWhite:boolean;
}


 const Board = ({board,playingAsWhite}:Props)=> {

  return (
    
<div className="board board-grid-7 board-center">
    {board.squares.map((square:SquareModel)=>
    <div className={`col-start-${playingAsWhite?square.column + 1: 8 - square.column} row-start-${playingAsWhite?8 - square.row:square.row + 1}`}>
        <Square key={`${square.row}_${square.column}`} square={square}/>
    </div>
    )}
</div>
   
  );
}

export default Board;