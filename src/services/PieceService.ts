import PieceModel, {PieceType} from "../models/PieceModel";


const pieceIcons = {
   [PieceType.ROOK]: 'fa-chess-rook',
   [PieceType.BISHOP]: 'fa-chess-bishop',
   [PieceType.KING]: 'fa-chess-king',
   [PieceType.KNIGHT]: 'fa-chess-knight',
   [PieceType.QUEEN]: 'fa-chess-queen',
   [PieceType.PAWN]: 'fa-chess-pawn',
}

export const getPieceIcons = (piece: PieceModel):string =>{
    return pieceIcons[piece.type];
}
