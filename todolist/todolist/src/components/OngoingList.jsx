import { list } from "../data/data";

export function OngoingList() {
  let ongoingList = list.filter((e) => e.status === "ongoing");

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
    <div className="ongoing">
      <h3 className="category-title">On Progress</h3>
      {showList(ongoingList)}
    </div>
  );
}
