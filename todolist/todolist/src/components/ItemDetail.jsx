import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export function ItemDetail({ item, itemTitleClassName }) {
  const [onEdit, setOnEdit] = useState(false);
  const [newTaskName, setNewTaskName] = useState(item.name);
  const [newDueDate, setNewDueDate] = useState(item.dueDate);
  function onChangeName(e) {
    setNewTaskName(e.target.value);
  }
  function onChangeDueDate(e) {
    setNewDueDate(e.target.value);
  }
  function handleEditClick() {
    setOnEdit(!onEdit);
  }
  return (
    <div className="item__detail">
      {onEdit ? (
        <EditForm
          handleEditClick={handleEditClick}
          newTaskName={newTaskName}
          onChangeName={onChangeName}
          newDueDate={newDueDate}
          onChangeDueDate={onChangeDueDate}
        />
      ) : (
        <>
          <h4 className={itemTitleClassName}>{newTaskName}</h4>
          <p className="item__due-date">Due date: {newDueDate}</p>
        </>
      )}
      {!onEdit && <ItemOperations handleEditClick={handleEditClick} />}
    </div>
  );
}

export function EditForm({
  handleEditClick,
  newTaskName,
  onChangeName,
  newDueDate,
  onChangeDueDate,
}) {
  return (
    <form
      className="edit-form"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="edit-form__group">
        <label for="name">Task name:</label>
        <input
          className="edit-form__input"
          id="name"
          type="text"
          value={newTaskName}
          onChange={onChangeName}
        />
      </div>
      <div className="edit-form__group">
        <label for="date">Due date:</label>
        <input
          className="edit-form__input"
          id="date"
          type="date"
          value={new Date(newDueDate).toISOString().split("T")[0]}
          onChange={onChangeDueDate}
        />
      </div>
      <ItemOperations handleEditClick={handleEditClick} isOnEdit={true} />
    </form>
  );
}

export function ItemOperations({ handleEditClick, isOnEdit = false }) {
  return (
    <div className="item__operations">
      <button
        className="item-btn item__edit-btn"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleEditClick();
        }}
      >
        {isOnEdit ? "Save" : "Edit"}
        <FontAwesomeIcon icon={faPen} size="sm" style={{ color: "#ffffff" }} />
      </button>
      <button className="item-btn item__delete-btn">
        Delete
        <FontAwesomeIcon
          icon={faTrash}
          size="sm"
          style={{ color: "#ffffff" }}
        />
      </button>
    </div>
  );
}
