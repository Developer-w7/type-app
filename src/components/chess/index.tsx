import { useRef, useState, useEffect, FC } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import axios from '../../api/axios';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useDispatch, useSelector } from 'react-redux';

import './chess.css';
import { Box, Container } from '@mui/material';
import BoardModel from '../../models/BoardModel';
import Board from './Board';
import { PlayerColor } from '../../models/PlayerModel';


export default function ChessDashboard() {
// const board = new BoardModel();
const [board] = useState(new BoardModel())
const [playerTurn, setPlayerTurn] = useState<PlayerColor>(PlayerColor.WHITE);

  return (
    
<div>
    
    <Board board={board} 
      playingAsWhite
      playerTurn={playerTurn}
      />
</div>
   
  );
}
