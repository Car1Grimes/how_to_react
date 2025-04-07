import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export function ItemDetail({ item }) {
  return (
    <div className="item__detail">
      <p className="item__due-date">Due date: {item.dueDate}</p>
      <div className="item__operations">
        <button className="item-btn item__edit-btn">Edit</button>
        <button className="item-btn item__delete-btn">
          Delete
          <FontAwesomeIcon icon={faTrash} size="sm" style={{ color: "#fff" }} />
        </button>
      </div>
    </div>
  );
}
