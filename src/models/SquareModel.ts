import PieceModel from "./PieceModel";
import { CoordinatesModel } from "./CoordinateModel";   

const columnNotation:Record<number, string> = {

  0: 'a',
  1: 'b',
  2: 'c',
  3: 'd',
  4: 'e',
  5: 'f',
  6: 'g',
  7: 'h'

}
export default class SquareModel{
    
        coordinates:CoordinatesModel;
        piece: PieceModel | null;
     
    
        constructor(row:number,column:number){
            this.coordinates={row,column}
            this.piece = null;
        }
        setPiece(piece:PieceModel){
          this.piece = piece;
        }

        getSquareColumnCoordinates = ():string =>{
          
            return ` ${columnNotation[this.coordinates.column]}`;
        }
        
        
        getSquareRowCoordinates = ():string =>{
          
            return ` ${this.coordinates.row + 1}`;
        }

        isLightSquare = ():boolean =>{
          return (this.coordinates.column + this.coordinates.row ) % 2 === 0;
         }
        
    
    }