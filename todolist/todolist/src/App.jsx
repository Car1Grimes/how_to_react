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
import { list } from "./data/data";
export function App() {
  const [isCreateClicked, setIsCreateClicked] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [date, setDate] = useState("");
  const [newList, setNewList] = useState(list);

  function handleCreate() {
    setIsCreateClicked(true);
  }

  function handleNameChange(e) {
    setTaskName(e.target.value);
  }

  function handleDateChange(e) {
    setDate(e.target.value);
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
                <form
                  style={{
                    padding: "10px",
                    margin: "6px",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                  }}
                >
                  <label
                    className="form__label"
                    style={{
                      padding: "8px 0",
                    }}
                  >
                    Id:
                  </label>
                  <div className="form__group">
                    <label className="form__label" for="name">
                      Task name:{" "}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      style={{
                        padding: "10px",
                        width: "50%",
                      }}
                      onChange={handleNameChange}
                    />
                  </div>
                  <div className="form__group">
                    <label className="form__label" for="date">
                      Task due date:{" "}
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      style={{
                        padding: "10px",
                        width: "50%",
                      }}
                      onChange={handleDateChange}
                    />
                  </div>
                  <input
                    type="submit"
                    value="Add"
                    style={{
                      padding: "10px 12px",
                      border: "1px solid #ccc",
                      borderRadius: "6px",
                      background: "lightgreen",
                      cursor: "pointer",
                    }}
                    onClick={(taskName, date) => {
                      setNewList(
                        newList.push({
                          id: crypto.randomUUID,
                          name: { taskName },
                          dueDate: { date },
                          status: "planning",
                        })
                      );
                      setIsCreateClicked(false);
                    }}
                  />
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
