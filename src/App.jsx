import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Heading from "./components/Heading";
import TodoForm from "./components/TodoForm";
import TodoTable from "./components/TodoTable";
import todoList from "./components/todoList";
import "./App.scss";
import { Button } from "react-bootstrap";

function App() {
  const [tasks, setTasks] = useState(todoList);
  // const [sortedTask, setSortedTask] = useState(task);

  useEffect(() => {
    // loadFromLocalStorage();
    const data = localStorage.getItem("task");
    if (data) {
      setTasks(JSON.parse(data));
    }
  }, []);

  function sortTasks() {
    const sorted = [...tasks].sort((a, b) => a.priority - b.priority);
    // setSortedTask(sorted);
    setTasks(sorted);
  }

  function addTodo(todo) {
    const newTask = [...tasks, todo];
    setTasks(newTask);
    localStorage.setItem("task", JSON.stringify(newTask));
  }

  function deleteTask(id) {
    const newTask = tasks.filter((todo) => todo.id !== id);
    // console.log("something");

    setTasks(newTask);
    localStorage.setItem("task", JSON.stringify(newTask));
  }

  function updateTodo(todo) {
    const newTask = tasks.map((item) => {
      if (item.id === todo.id) {
        item = todo;
      }
      return item;
    });
    setTasks(newTask);
    localStorage.setItem("task", JSON.stringify(newTask));
  }

  return (
    <div className="App">
      <Heading />
      <TodoForm submitTodo={addTodo} label={" + Add a new note"} />
      <Button variant="warning" onClick={sortTasks}>Sort Tasks</Button>
      <TodoTable
        sortTodo={sortTasks}
        tasks={tasks}
        deleteTodo={deleteTask}
        editTodo={updateTodo}
      />
    </div>
  );
}

export default App;
