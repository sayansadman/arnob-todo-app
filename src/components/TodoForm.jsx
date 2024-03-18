import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FormModal from "./FormModal";
import Button from "react-bootstrap/Button";

// const defaultTodo = {
//   title: "",
//   content: "",
//   priority: 3,
//   status: "Not Started",
// };

function TodoForm({ submitTodo, label, defaultTodo }) {
  const [todo, setTodo] = useState({});
  const [showModal, setShowModal] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (todo.id) {
      submitTodo({
        ...todo,
        updatedAt: new Date().toLocaleString(),
      });
    } else {
      submitTodo({
        ...todo,
        id: uuidv4(),
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
      });
    }

    reset();
    setShowModal(false);
  }

  useEffect(() => reset(), []);

  function reset() {
    setTodo(
      defaultTodo
        ? defaultTodo
        : {
            id: uuidv4(),
            title: "",
            content: "",
            priority: 3,
            status: "Not Started",
            createdAt: new Date().toLocaleString(),
            updatedAt: new Date().toLocaleString(),
          }
    );
  }

  function handleChange(event) {
    switch (event.target.className) {
      case "title":
        setTodo({
          ...todo,
          title: event.target.value,
        });
        break;
      case "content":
        setTodo({
          ...todo,
          content: event.target.value,
        });
        break;
      case "priority":
        setTodo({
          ...todo,
          priority: event.target.value,
        });
        break;
      case "status":
        setTodo({
          ...todo,
          status: event.target.value,
        });
        break;
      default:
        break;
    }
  }

  return (
    <React.Fragment>
      <Button
        variant="info"
        onClick={() => {
          setShowModal(true);
        }}
      >
        {label}
      </Button>
      <FormModal
        title={label}
        showModal={showModal}
        closeModal={() => setShowModal(false)}
        submit={handleSubmit}
      >
        <form>
          <input
            className="title"
            type="text"
            placeholder="Title"
            value={todo.title}
            onChange={handleChange}
            style={{ width: "40%" }}
          />
          <br />
          <br />
          <input
            className="content"
            type="text"
            placeholder="What would you like to do?"
            value={todo.content}
            onChange={handleChange}
            style={{ width: "80%", height: "120px" }}
          />
          <br />
          <br />
          <div className="dropdown-wrapper">
            <label>
              <strong>Priority Level:</strong>
              <select
                className="priority"
                defaultValue={"3"}
                onChange={handleChange}
                // value={String(todo.priority)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </label>
          </div>
          <br />
          <div className="dropdown-wrapper">
            <label>
              <strong>Status:</strong>
              <select
                className="status"
                defaultValue={"Not Started"}
                // value={todo.status}
                onChange={handleChange}
              >
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
                <option value="Failed">Failed</option>
              </select>
            </label>
          </div>
          <br />
        </form>
      </FormModal>
    </React.Fragment>
  );
}

export default TodoForm;
