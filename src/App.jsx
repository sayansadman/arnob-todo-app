import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Heading from "./components/Heading";
import TodoForm from "./components/TodoForm";
import TodoTable from "./components/TodoTable";
import todoList from "./components/todoList";
import "./App.scss";

function App() {
  const [task, setTask] = useState(todoList);
  // const [sortedTask, setSortedTask] = useState(task);

  useEffect(() => {
    // loadFromLocalStorage();
    const data = localStorage.getItem("task");
    if (data) {
      setTask(JSON.parse(data));
    }
  });

  // function sortTasks() {
  //   const sorted = [...task].sort((a, b) => a.priority - b.priority);
  //   setSortedTask(sorted);
  //   setTask(sorted);
  // }

  function addTodo(todo) {
    setTask([...task, todo]);
  }

  function deleteTask(id) {
    const newTask = task.filter((todo) => todo.id !== id);
    // console.log("something");

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
    localStorage.setItem("task", JSON.stringify(newTask));
  }

  return (
    <div className="App">
      <Heading />
      <TodoForm submitTodo={addTodo} label={"Add a new note"} />
      <TodoTable
        // sortTodo={sortTasks}
        tasks={task}
        deleteTodo={deleteTask}
        editTodo={updateTodo}
      />
    </div>
  );
}

export default App;
