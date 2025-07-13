import { useMemo } from "react";
import { PlayerColor } from "../../models/PlayerModel";
import SquareModel from "../../models/SquareModel";

// No More Needed
// import { getPieceIcons } from "../../services/PieceService";
// import { getSquareColumnCoordinates, getSquareRowCoordinates, isLightSquare } from "../../services/SquareServices";

interface Props{
    square:SquareModel;
    showCoordinateRow:boolean;
    showCoordinateColumn:boolean;
    select:(square: SquareModel | null)=> void;
    isSelected:boolean;
    canSelect:boolean;
    showAsValidMove:boolean;
}


 const Square = ({square,showCoordinateRow,showCoordinateColumn,select, isSelected, canSelect,showAsValidMove}:Props)=> {


  const backgroundColor =  useMemo(()=>{
    if(isSelected){ return "bg-grey"}
    return square.isLightSquare()? "bg-white":"bg-orange-700"
  },[isSelected, square]);

  const onClick = ()=>{

    if(canSelect){
      select(isSelected ? null :square) 
    }

  }

  return (
    
<div 
 className={`square h-100  ${backgroundColor}`}
 onClick={onClick}
>
    
    {showCoordinateColumn &&<span>{square.getSquareColumnCoordinates()}</span> }
    {showCoordinateRow &&<span>{square.getSquareRowCoordinates()}</span>}
    {showAsValidMove && <span className={`${square.piece?'rounded-outlined':'rounded-full'}`}></span>}
    {square.piece && <i className={`fa-solid ${square.piece.getPieceIcons()} ${square.piece.isWhitePiece() ? "text-white shadow":"text-black"} board-icon`}></i>} 
</div>
   
  );
}



export default Square;