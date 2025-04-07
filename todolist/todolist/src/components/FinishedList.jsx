import { ListItem } from "./ListItem";

export function FinishedList({ list }) {
  let finishedList = list.filter((e) => e.status === "finished");

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
    <div className="finished">
      <h3 className="category-title">Finished</h3>
      {showList(finishedList)}
    </div>
  );
}
