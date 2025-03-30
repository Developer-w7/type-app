// import { PieceType } from "../models/PieceModel";
// import { PlayerColor } from "../models/PlayerModel";

interface InitialPiecePosition {
    title: String;
    to: {};
    state: {};
  
}

export const initialPiecePositions: Array<InitialPiecePosition> = [
    // White
    { title: 'Dashboard', to: { pathname: "/manage_user",search: "?query=string",hash: "#hash", }, state: {id: 123}},
    { title: 'Dashboard', to: {}, state: {}}

];