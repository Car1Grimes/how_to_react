import { useState } from "react";

export function CreateForm({ newList, setNewList, setIsCreateClicked }) {
  const [taskName, setTaskName] = useState("");
  const [date, setDate] = useState("");

  function handleNameChange(e) {
    setTaskName(e.target.value);
  }

  function handleDateChange(e) {
    setDate(e.target.value);
  }

  function checkValidInput() {
    if (taskName === "" || taskName === null || date === "" || date === null) {
      return;
    }
    setNewList([
      {
        id: crypto.randomUUID(),
        name: taskName,
        dueDate: date,
        status: "planning",
      },
      ...newList,
    ]);
  }
  return (
    <form className="add-item-form">
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
          className="input-text"
          type="text"
          id="name"
          name="name"
          onChange={handleNameChange}
        />
      </div>
      <div className="form__group">
        <label className="form__label" for="date">
          Task due date:{" "}
        </label>
        <input
          className="input-date"
          type="date"
          id="date"
          name="date"
          onChange={handleDateChange}
        />
      </div>
      <input
        className="add-btn"
        type="submit"
        value="Add"
        onClick={(e) => {
          e.preventDefault();
          checkValidInput();
          setIsCreateClicked(false);
        }}
      />
    </form>
  );
}
