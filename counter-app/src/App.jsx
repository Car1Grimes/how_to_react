import { useState } from "react";

export default function App() {
  return (
    <>
      <div className="content">
        <div className="container">
          <h1 className="title">Counter App</h1>
          <section className="counter-section">
            <button className="btn">Decrease (-)</button>
            <div>
              <span>0</span>
            </div>
            <button className="btn">Increase (+)</button>
          </section>
        </div>
      </div>
    </>
  );
}
