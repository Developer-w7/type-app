import { initialPiecePositions } from "../constants/initial-piece-positions";
import PieceModel, { ColorType, PieceType } from "./PieceModel";
import SquareModel from "./SquareModel";
    
export default class BoardModel{
    
        squares: Array<SquareModel> =[];
     
    
        constructor(){

            for (let row = 0; row < 8; row++) {
                for (let column = 0; column < 8; column++) {
                    const square = new SquareModel(row,column);

                    // if (initialPiecePositions[0].rows.includes(row) && initialPiecePositions[0].columns.includes(column)) {
                    // square.setPiece(new PieceModel(PieceType.PAWN,ColorType.WHITE))
                    // }

                    initialPiecePositions.forEach((item) => {
                        if (item.rows.includes(row) && item.columns.includes(column)) {
                            // square.setPiece(new pieceClasses[item.pieceType](item.playerColor));
                            square.setPiece(new PieceModel(item.pieceType,item.playerColor))
                        }
                    });


                    // this.squares.push(new SquareModel(row, column));
                    this.squares.push(square);

                }}

           
        }
    
    }