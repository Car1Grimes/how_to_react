import { useState } from "react";
import { ItemDetail } from "./ItemDetail";

export function ListItem({ entry }) {
  const [showDetail, setShowDetail] = useState(false);
  function handleClick() {
    setShowDetail(!showDetail);
  }
  let itemTitleClassName = "";
  if (showDetail) {
    itemTitleClassName += "item__title--highlight";
  }
  return (
    <li key={entry.id} className="list-element" onClick={handleClick}>
      <h4 className={itemTitleClassName}>{entry.name}</h4>
      {showDetail && <ItemDetail item={entry} />}
    </li>
  );
}
