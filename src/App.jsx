import React, { useState } from "react";
import Heading from "./components/Heading";
import TodoForm from "./components/TodoForm";
import TodoTable from "./components/TodoTable";
import todoList from "./components/todoList";
import "./App.scss";

function App() {
  const [task, setTask] = useState(todoList);
  function addTodo(todo) {
    setTask([...task, todo]);
  }

  function deleteTask(id) {
    const newTask = task.filter((todo) => todo.id !== id);
    setTask(newTask);
  }

  function editTask(todo) {
    const newTask = task.map((t) => {
      if (t.id === todo.id) {
        return todo;
      }
      return t;
    });

    setTask(newTask);
  }
  return (
    <div className="App">
      <Heading />
      <TodoForm submitTodo={addTodo} />
      <br />
      <br />
      <TodoTable tasks={task} deleteTodo={deleteTask} editTodo={editTask} />
    </div>
  );
}

export default App;
