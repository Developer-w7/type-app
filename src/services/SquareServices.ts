import SquareModel from "../models/SquareModel";

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

export const getSquareColumnCoordinates = (square: SquareModel):string =>{
    // return ` ${columnNotation[square.column]}${square.row + 1}`;
    return ` ${columnNotation[square.coordinates.column]}`;
}


export const getSquareRowCoordinates = (square: SquareModel):string =>{
    // return ` ${columnNotation[square.column]}${square.row + 1}`;
    return ` ${square.coordinates.row + 1}`;
}


export const isLightSquare = (square: SquareModel):boolean =>{
    return (square.coordinates.column + square.coordinates.row ) % 2 === 0;
}