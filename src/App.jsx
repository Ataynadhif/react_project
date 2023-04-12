import React, { useState } from "react";
import Todos from "./components/Todos"
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Finish Progate React Course",
      completed: false,
    },
    {
      id: 2,
      title: "Have lunch with Guru Domba",
      completed: false,
    },
    {
      id: 3,
      title: "Learn React with Ninja Ken",
      completed: false,
    },
  ]);
  const toggleBtn = (todoId) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updateTodos)
  }
  return (
      <div style={styles.container}>
        <h1 style={styles.title}>My Todo List</h1>
        <Todos todos={todos} toggleBtn={toggleBtn}/>
      </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '12px',
  },
  title: {
    fontSize: '36px',
  },
}

export default App;
