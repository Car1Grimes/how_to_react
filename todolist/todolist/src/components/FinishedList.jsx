import { ListItem } from "./ListItem";
import { useState } from "react";

export function FinishedList({ list, onDeleteItem }) {
  let finishedList = list.filter((e) => e.status === "finished");
  const [expandedItemId, setExpandedItemId] = useState(null);

  function showList(l) {
    return (
      <ul>
        {l.map((e) => {
          return (
            <ListItem
              key={`finished-${e.id}`}
              entry={e}
              isExpanded={expandedItemId === e.id}
              setExpandedItemId={setExpandedItemId}
              onDeleteItem={onDeleteItem}
            />
          );
        })}
      </ul>
    );
  }

  return (
    <div className="finished">
      <h3 className="category-title">Finished</h3>
      {showList(finishedList)}
    </div>
  );
}
