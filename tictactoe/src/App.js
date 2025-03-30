import { useState } from "react";

function Square() {
  return <button className="square"></button>;
}

export default function Board() {
  return (
    <>
      <div className="square-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="square-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="square-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
