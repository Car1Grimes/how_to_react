import { ListItem } from "./ListItem";
import { useState } from "react";

export function OngoingList({ list, onDeleteItem }) {
  let ongoingList = list.filter((e) => e.status === "ongoing");
  const [expandedItemId, setExpandedItemId] = useState(null);

  function showList(l) {
    return (
      <ul>
        {l.map((e) => {
          return (
            <ListItem
              key={`ongoing-${e.id}`}
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
    <div className="ongoing">
      <h3 className="category-title">On Progress</h3>
      {showList(ongoingList)}
    </div>
  );
}
