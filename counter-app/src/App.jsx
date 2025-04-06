import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  function handleDecrease() {
    if (counter === 0) {
      return;
    }
    setCounter(counter - 1);
  }

  function handleIncrease() {
    setCounter(counter + 1);
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
            <button className="btn--red" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
