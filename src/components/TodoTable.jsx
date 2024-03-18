import TodoForm from "./TodoForm";
import { Button, Table } from "react-bootstrap";

function TodoTable({ tasks, deleteTodo, editTodo, sortTodo }) {
  // const [showModal, setShowModal] = useState(false);

  // function openModal() {
  //   setShowModal(true);
  // }

  // function closeModal() {
  //   setShowModal(false);
  // }
  return (
    <div>
      <Table responsive bordered striped variant="dark" hover="true">
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>Title</th>
            <th>Task</th>
            {/* <th onClick={sortTodo}>Priority</th> */}
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
              {/* <td>{index + 1}</td> */}
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
                <Button variant="danger" onClick={() => deleteTodo(todo.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default TodoTable;
