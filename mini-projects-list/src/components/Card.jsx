import { useState } from "react";

export function Card({ card }) {
  const [isHighlight, setIsHighlight] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  });

  function handleClick() {
    setIsHighlight(!isHighlight);
  }

  function handleMouseMove(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    // Use scroll position inside the card!
    const scrollLeft = card.scrollLeft;
    const scrollTop = card.scrollTop;

    setCursorPos({
      x: e.clientX - rect.left + scrollLeft,
      y: e.clientY - rect.top + scrollTop,
    });
    setIsHover(true);
  }

  function handleMouseLeave() {
    setIsHover(false);
  }

  let cardClassName = "project-card";
  if (isHighlight) {
    cardClassName += " card--highlight";
  }
  return (
    <div
      className={cardClassName}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {isHover && (
        <div
          className="cursor-dot"
          style={{
            left: cursorPos.x,
            top: cursorPos.y,
          }}
        ></div>
      )}
      <h2 className="project-title">{card.title}</h2>
      <p className="project-focus">
        <b className="project-focus--highlight">This project focus on:</b>{" "}
        {card.focus}
      </p>
      <div className="project-body">
        <ul className="features">
          {card.features.map((f) => {
            return (
              <li key={f} className="feature">
                {f}
              </li>
            );
          })}
        </ul>
      </div>
      <label onClick={(e) => e.stopPropagation} className="finish-checkbox">
        <input type="checkbox" />
        Project finished !
      </label>
    </div>
  );
}
