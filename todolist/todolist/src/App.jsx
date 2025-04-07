import { useState } from "react";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Navigations } from "./components/Navigations";
import { NavigationLink } from "./components/NavigationLink";
import { NavUsers } from "./components/NavUsers";
export function App() {
  return (
    <main>
      <Header>
        <Navbar>
          <Navigations>
            <NavigationLink name="All Tasks" url="" />
            <NavigationLink name="Active Tasks" url="" />
            <NavigationLink name="Completed Tasks" url="" />
          </Navigations>

          <NavUsers />
        </Navbar>
      </Header>
    </main>
  );
}
