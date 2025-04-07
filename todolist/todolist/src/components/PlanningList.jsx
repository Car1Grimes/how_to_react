import { list } from "../data/data";

export function PlanningList() {
  function showList(l) {
    return (
      <ul>
        {l.map((el) => {
          return (
            <li key={el.id} className="list-element">
              {el.name}
            </li>
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
