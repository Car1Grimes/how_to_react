import { useState } from "react";
import { list } from "../data/data";
import { ListItem } from "./ListItem";

export function PlanningList({ handleClick }) {
  const [isItemHovered, setIsItemHovered] = useState(false);
  function showList(l) {
    return (
      <ul>
        {l.map((el) => {
          return <ListItem entry={el} />;
        })}
      </ul>
    );
  }
  let planningList = list.filter((e) => e.status === "planning");
  return (
    <div className="planning">
      <h3 className="category-title">Planning</h3>
      {showList(planningList)}
    </div>
  );
}
