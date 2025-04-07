import { useState } from "react";

export function SetCounter({
  isOnSet,
  setIsOnSet,
  inputValue,
  setInputValue,
  counter,
  setCounter,
  handleClickSetter,
}) {
  return (
    <div>
      {isOnSet ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <input
            className="counter-input"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <input
            className="btn counter-set-btn"
            type="submit"
            value="Set"
            onClick={() => {
              if (isNaN(inputValue) || inputValue === null) {
                setCounter(counter);
              } else {
                setCounter(Number(inputValue));
              }
              setIsOnSet(false);
            }}
          />
        </div>
      ) : (
        <button className="btn" onClick={handleClickSetter}>
          Set counter
        </button>
      )}
    </div>
  );
}
