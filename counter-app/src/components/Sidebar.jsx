import { useState } from "react";
import { SetCounter } from "./SetCounter";
export function Sidebar({
  isOnSet,
  setIsOnSet,
  inputValue,
  setInputValue,
  counter,
  setCounter,
  handleClickSetter,
}) {
  return (
    <div className="sidebar">
      <h2 className="sidebar__title">Sidebar</h2>
      <div className="sidebar__row">
        <SetCounter
          isOnSet={isOnSet}
          setIsOnSet={setIsOnSet}
          inputValue={inputValue}
          setInputValue={setInputValue}
          counter={counter}
          setCounter={setCounter}
          handleClickSetter={handleClickSetter}
        />
      </div>
    </div>
  );
}
