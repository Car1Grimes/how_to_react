import { ItemDetail } from "./ItemDetail";

export function ListItem({
  entry,
  isExpanded,
  setExpandedItemId,
  onDeleteItem,
}) {
  function handleClick() {
    setExpandedItemId(isExpanded ? null : entry.id);
  }
  const itemTitleClassName = isExpanded ? "item__title--highlight" : "";

  return (
    <li key={entry.id} className="list-element" onClick={handleClick}>
      {isExpanded ? (
        <ItemDetail
          item={entry}
          itemTitleClassName={itemTitleClassName}
          onDeleteItem={onDeleteItem}
        />
      ) : (
        <h4 className={itemTitleClassName}>{entry.name}</h4>
      )}
    </li>
  );
}
