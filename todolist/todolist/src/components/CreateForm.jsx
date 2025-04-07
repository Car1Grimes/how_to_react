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
  return (
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
        onClick={(e) => {
          e.preventDefault();
          setNewList([
            {
              id: crypto.randomUUID(),
              name: taskName,
              dueDate: date,
              status: "planning",
            },
            ...newList,
          ]);
          setIsCreateClicked(false);
        }}
      />
    </form>
  );
}
