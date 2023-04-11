import React from "react";
import './TicTacToe.css';
import { Board } from "./Board";
import { useState } from "react";

const intialBoard=['0','1','2','3','4','5','6','7','8']

export const TicTacToe=()=>{
    const[gameState,setGameState] = useState(intialBoard);
    return(
        <div>
            <div className="game">
                <h1>Tic-Tac-Toe</h1>
                <Board gameState={gameState}/>
            </div>
        </div>
    );
}