import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    const trimmedTask = task.trim();

    if (!trimmedTask) {
      return;
    }

    setTodos((currentTodos) => [...currentTodos, trimmedTask]);
    setTask("");
  };

  const deleteTask = (indexToDelete) => {
    setTodos((currentTodos) =>
      currentTodos.filter((_, index) => index !== indexToDelete),
    );
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  return (
    <main className="app-shell">
      <section className="todo-card">
        <h1>Todo App</h1>
        <p className="subtitle">Add a task, stay focused, and clear it when done.</p>

        <div className="composer">
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(event) => setTask(event.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button type="button" onClick={addTask}>
            Add
          </button>
        </div>

        <ul className="todo-list">
          {todos.length === 0 ? (
            <li className="empty-state">No tasks yet.</li>
          ) : (
            todos.map((todo, index) => (
              <li key={`${todo}-${index}`} className="todo-item">
                <span>{todo}</span>
                <button type="button" onClick={() => deleteTask(index)}>
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      </section>
    </main>
  );
}

export default App;
