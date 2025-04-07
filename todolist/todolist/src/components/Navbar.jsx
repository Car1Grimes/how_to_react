import { NavigationLink } from "./NavigationLink";
import { NavUsers } from "./NavUsers";

export function Navbar({ children }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="!">TodoList</a>
      </div>
      {children}
    </nav>
  );
}
