import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [isOnSet, setIsOnSet] = useState(false);
  const [inputValue, setInputValue] = useState(0);

  function handleDecrease() {
    if (counter === 0) {
      return;
    }
    setCounter(counter - 1);
  }

  function handleIncrease() {
    setCounter(counter + 1);
  }

  function handleClickSetter() {
    setIsOnSet(true);
  }

  function handleReset() {
    setCounter(0);
  }
  return (
    <>
      <div className="content">
        <div className="container">
          <h1 className="title">Counter App</h1>
          <section className="counter-section">
            <button
              className="btn"
              onClick={handleDecrease}
              disabled={counter === 0}
            >
              Decrease (-)
            </button>
            <div>
              <span>{counter}</span>
            </div>
            <button className="btn" onClick={handleIncrease}>
              Increase (+)
            </button>
          </section>
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
            <button className="btn btn--red" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
