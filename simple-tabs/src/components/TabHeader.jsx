export function TabHeader({ name, handleClick, isActive }) {
  let headerClassName = "font-bold italic text-xl p-5";
  if (isActive) {
    headerClassName += " dark:text-sky-400";
  } else {
    headerClassName += " text-gray-600";
  }
  return (
    <div className="" onClick={() => handleClick(name)}>
      <h3 className={headerClassName}>{name}</h3>
    </div>
  );
}
