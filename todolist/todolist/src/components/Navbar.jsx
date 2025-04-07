import { NavigationLink } from "./NavigationLink";
import { NavUsers } from "./NavUsers";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="!">TodoList</a>
      </div>
      <div className="navigations">
        <NavigationLink name="All Tasks" url="" />
        <NavigationLink name="Active Tasks" url="" />
        <NavigationLink name="Completed Tasks" url="" />
      </div>
      <NavUsers />
    </nav>
  );
}
