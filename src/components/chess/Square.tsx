import { PlayerColor } from "../../models/PlayerModel";
import SquareModel from "../../models/SquareModel";
import { getPieceIcons } from "../../services/PieceService";
import { getSquareCoordinates, isLightSquare } from "../../services/SquareServices";

interface Props{
    square:SquareModel
}


 const Square = ({square}:Props)=> {

  return (
    
<div className={`square h-100  ${isLightSquare(square)? "bg-white":"bg-orange-700"}`}>
    {/* <span>{getSquareCoordinates(square)}</span> */}
    {square.piece && <i className={`fa-solid ${getPieceIcons(square.piece)} ${square.piece.color === PlayerColor.WHITE ? "text-white shadow":"text-black"} board-icon`}></i>} 
</div>
   
  );
}



export default Square;