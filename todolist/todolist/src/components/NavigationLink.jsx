export function NavigationLink({ name, url }) {
  return (
    <div className="nav__link">
      <a href={url}>{name}</a>
    </div>
  );
}
