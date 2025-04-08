import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export function ItemDetail({ item, itemTitleClassName }) {
  const [onEdit, setOnEdit] = useState(false);
  function handleEditClick() {
    setOnEdit(true);
  }
  return (
    <div className="item__detail">
      {onEdit ? (
        <EditForm item={item} handleEditClick={handleEditClick} />
      ) : (
        <>
          <h4 className={itemTitleClassName}>{item.name}</h4>
          <p className="item__due-date">Due date: {item.dueDate}</p>
        </>
      )}
      {!onEdit && <ItemOperations handleEditClick={handleEditClick} />}
    </div>
  );
}

export function EditForm({ item, handleEditClick }) {
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
          value={item.name}
        />
      </div>
      <div className="edit-form__group">
        <label for="date">Due date:</label>
        <input
          className="edit-form__input"
          id="date"
          type="date"
          value={new Date(item.dueDate).toISOString().split("T")[0]}
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
