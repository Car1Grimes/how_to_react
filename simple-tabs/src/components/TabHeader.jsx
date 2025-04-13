export function TabHeader({ name, handleClick }) {
  return (
    <div className="" onClick={() => handleClick(name)}>
      <h3 className="font-bold italic text-xl text-gray-500 p-5">{name}</h3>
    </div>
  );
}
