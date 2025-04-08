import { useState } from "react";
import { ListItem } from "./ListItem";

export function PlanningList({ list, onDeleteItem }) {
  const [expandedItemId, setExpandedItemId] = useState(null);
  function showList(l) {
    return (
      <ul>
        {l.map((el) => {
          return (
            <ListItem
              key={`planning-${el.id}`}
              entry={el}
              isExpanded={expandedItemId === el.id}
              setExpandedItemId={setExpandedItemId}
              onDeleteItem={onDeleteItem}
            />
          );
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
