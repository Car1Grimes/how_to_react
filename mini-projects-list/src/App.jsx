import { useState } from "react";
import { Card } from "./components/Card";
import { cards } from "./data/data";

export default function App() {
  return (
    <div className="content">
      <div className="container">
        <h1>Mini-projects list</h1>
        <div className="row">
          {cards.map((c) => {
            return (
              <div key={c.id} className="col">
                <Card card={c} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
