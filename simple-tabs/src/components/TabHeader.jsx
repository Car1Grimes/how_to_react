//
export function TabHeader({ name, handleClick, isActive }) {
  let headerClassName =
    "w-full cursor-pointer border border-gray-400 font-bold italic text-xl p-5 text-center";
  if (isActive) {
    headerClassName += " dark:text-sky-400 border-b-0";
  } else {
    headerClassName += " text-gray-600";
  }
  return (
    <div className="w-full" onClick={() => handleClick(name)}>
      <h3 className={headerClassName}>{name}</h3>
    </div>
  );
}
