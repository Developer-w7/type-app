import { PlayerColor } from "./PlayerModel";

export enum PieceType{
PAWN='PAWN',
KNIGHT='KNIGHT',
BISHOP='BISHOP',
ROOK='ROOK',
QUEEN='QUEEN',
KING='KING'
}

export enum ColorType{
    WHITE='WHITE',
    BLACK='BLACK'
}

export const pieceIcons = {
    [PieceType.ROOK]: 'fa-chess-rook',
    [PieceType.BISHOP]: 'fa-chess-bishop',
    [PieceType.KING]: 'fa-chess-king',
    [PieceType.KNIGHT]: 'fa-chess-knight',
    [PieceType.QUEEN]: 'fa-chess-queen',
    [PieceType.PAWN]: 'fa-chess-pawn',
 }

export default class PieceModel{

    readonly type: PieceType;
    readonly color: PlayerColor;

    constructor(type:PieceType,color:PlayerColor){
        this.type = type;
        this.color = color;
    }

    getPieceIcons = ():string =>{
        return pieceIcons[this.type];
    }
    isWhitePiece=():boolean =>{
       return this.color === PlayerColor.WHITE;
    }

}