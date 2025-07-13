import { useCallback, useMemo, useState } from "react";
import BoardModel from "../../models/BoardModel";
import SquareModel from "../../models/SquareModel";
import Square from "./Square";
import { PlayerColor } from "../../models/PlayerModel";
import { CoordinatesModel } from "../../models/CoordinateModel";
import { getValidMoves } from "../../services/MoveService";


interface Props{
    board:BoardModel,
    playingAsWhite:boolean;
    playerTurn:PlayerColor
}


 const Board = ({board,playingAsWhite,playerTurn}:Props)=> {
const [selectedSquare,setSelectedSquare]=useState<SquareModel | null>(null)

const validMoves: Array<CoordinatesModel> = useMemo(()=>{
    return getValidMoves(selectedSquare)
},[selectedSquare,board]);

const isValidMove =useCallback( (square:SquareModel) => {

return validMoves.some((validMovesquare)=>validMovesquare.column === square.coordinates.column && validMovesquare.row === square.coordinates.row)

},[validMoves])

  return (
    
<div className="board board-grid-7 board-center">
    {board.squares.map((square:SquareModel)=>
    <div className={`col-start-${playingAsWhite?square.coordinates.column + 1: 8 - square.coordinates.column} row-start-${playingAsWhite?8 - square.coordinates.row:square.coordinates.row + 1}`}>
        <Square key={`${square.coordinates.row}_${square.coordinates.column}`} 
         square={square} 
         showCoordinateColumn={square.coordinates.row === 0} 
         showCoordinateRow={square.coordinates.column === 0}
         showAsValidMove={isValidMove(square)}
         isSelected={square.coordinates.row === selectedSquare?.coordinates.row && square.coordinates.column === selectedSquare?.coordinates.column}
         select={setSelectedSquare}
         canSelect={square.piece?.color === playerTurn || isValidMove(square)}
        />
    </div>
    )}
</div>
   
  );
}

export default Board;