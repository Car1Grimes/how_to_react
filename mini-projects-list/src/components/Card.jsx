import { cards } from "../data/data";

export function Card({ card }) {
  return (
    <div className="project-card">
      <h2 className="project-title">{card.title}</h2>
      <p className="project-focus">
        <b className="project-focus--highlight">This project focus on:</b>{" "}
        {card.focus}
      </p>
      <div className="project-body">
        <ul className="features">
          {card.features.map((f) => {
            return <li className="feature">{f}</li>;
          })}
        </ul>
      </div>
      <label className="finish-checkbox">
        <input type="checkbox" />
        Project finished !
      </label>
    </div>
  );
}
