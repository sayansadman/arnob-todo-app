import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function TodoForm({ submitTodo }) {
  const [todo, setTodo] = useState({});
  function handleSubmit(event) {
    event.preventDefault();
    todo.id = uuidv4();
    todo.createdAt = new Date().toLocaleString();
    todo.updatedAt = new Date().toLocaleString();
    submitTodo(todo);
    reset();
  }

  function reset() {
    setTodo({
      title: "",
      content: "",
      priority: 3,
      status: "Not Started",
    });
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
    <div>
      <form>
        <input
          className="title"
          type="text"
          placeholder="Title"
          value={todo.title}
          onChange={handleChange}
        />
        <br />
        <input
          className="content"
          type="text"
          placeholder="What would you like to do?"
          value={todo.content}
          onChange={handleChange}
        />
        <div className="dropdown-wrapper">
          <p>
            <strong>Priority Level:</strong>
          </p>
          <select
            className="priority"
            defaultValue={"-"}
            onChange={handleChange}
            value={todo.priority}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <br />
        <div className="dropdown-wrapper">
          <p>
            <strong> Status:</strong>
          </p>
          <select
            className="status"
            defaultValue={"-"}
            value={todo.status}
            onChange={handleChange}
          >
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
            <option value="Failed">Failed</option>
          </select>
        </div>
        <br />
        <button type="submit" onClick={handleSubmit}>
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
