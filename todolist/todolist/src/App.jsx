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
import { CreateForm } from "./components/CreateForm";
import { list } from "./data/data";
export function App() {
  const [isCreateClicked, setIsCreateClicked] = useState(false);

  const [newList, setNewList] = useState(list);

  function handleCreate() {
    setIsCreateClicked(true);
  }

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
              <PlanningList list={newList} />
              <OngoingList list={newList} />
              <FinishedList list={newList} />
            </section>
            <section className="sidebar col col-2">
              <h2>Stats</h2>
            </section>
          </div>
          <div className="row">
            <div className="col col-6 offset-2">
              <button className="create-btn" onClick={handleCreate}>
                + New todo
              </button>
              {isCreateClicked && (
                <CreateForm
                  newList={newList}
                  setNewList={setNewList}
                  setIsCreateClicked={setIsCreateClicked}
                />
              )}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
