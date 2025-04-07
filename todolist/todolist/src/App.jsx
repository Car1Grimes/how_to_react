import { useState } from "react";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Navigations } from "./components/Navigations";
import { NavigationLink } from "./components/NavigationLink";
import { NavUsers } from "./components/NavUsers";
import { Container } from "./components/Container";
import { PlanningList } from "./components/PlanningList";
import { OngoingList } from "./components/OngoingList";
import { FinishedList } from "./components/FinishedList";
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
      <section className="content">
        <Container>
          <div className="row">
            <section className="sidebar col col-2">
              <h2>Sidebar</h2>
            </section>
            <section className="todolist col col-8">
              <PlanningList />
              <OngoingList />
              <FinishedList />
            </section>
            <section className="sidebar col col-2">
              <h2>Stats</h2>
            </section>
          </div>
        </Container>
      </section>
    </main>
  );
}
