import { list } from "../data/data";

export function FinishedList() {
  let finishedList = list.filter((e) => e.status === "finished");

  function showList(l) {
    return (
      <ul>
        {l.map((e) => {
          return (
            <li key={e.id} className="list-element">
              {e.name}
            </li>
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
