import { useState } from "react";
import "./App.css";
import Game from "./TicTacToe";

function App() {
  return (
    <>
      <div className="container">
        <h1>Hello, Tictactoe</h1>
        <Game />
      </div>
    </>
  );
}
export default App;
