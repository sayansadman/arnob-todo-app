import { useState } from "react";
import Modal from "./FormModal";
import TodoForm from "./TodoForm";

function TodoTable({ tasks, deleteTodo, editTodo }) {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Task</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((todo, index) => (
            <tr key={todo.id}>
              <td>{index + 1}</td>
              <td>{todo.title}</td>
              <td>{todo.content}</td>
              <td>{todo.priority}</td>
              <td>{todo.status}</td>
              <td>{todo.createdAt}</td>
              <td>{todo.updatedAt}</td>
              <td>
                <TodoForm
                  submitTodo={editTodo}
                  defaultTodo={todo}
                  label={"Edit"}
                />
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default TodoTable;
