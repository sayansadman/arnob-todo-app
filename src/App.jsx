import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
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
    console.log("something");

    setTask(newTask);
  }

  function updateTodo(todo) {
    const newTask = task.map((item) => {
      if (item.id === todo.id) {
        item = todo;
      }
      return item;
    });
    setTask(newTask);
  }

  return (
    <div className="App">
      <Heading />
      <TodoForm submitTodo={addTodo} label={"Add a new note"} />
      <TodoTable tasks={task} deleteTodo={deleteTask} editTodo={updateTodo} />
    </div>
  );
}

export default App;
