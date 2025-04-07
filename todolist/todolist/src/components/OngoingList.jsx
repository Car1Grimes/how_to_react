import { ListItem } from "./ListItem";

export function OngoingList({ list }) {
  let ongoingList = list.filter((e) => e.status === "ongoing");

  function showList(l) {
    return (
      <ul>
        {l.map((e) => {
          return <ListItem entry={e} />;
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
