import { useState } from "react";
import TodoItems from "./TodoItems";
import "./assets/styles.css";

export type Todo = {
  name: string;
  completed: boolean;
  id: string;
};

function App() {
  const [newTodoName, setnewTodoName] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setnewTodoName(e.target.value);
  }

  function handleAddTodos() {
    setTodos((currTodos) => [
      ...currTodos,
      { name: newTodoName, completed: false, id: crypto.randomUUID() },
    ]);
    setnewTodoName("");
  }

  function toggleChecked(id: string) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        id === todo.id
          ? { id: todo.id, name: todo.name, completed: !todo.completed }
          : todo
      )
    );
  }

  function handleDelete(id: string) {
    setTodos((currentTodos) => currentTodos.filter((todo) => id !== todo.id));
  }

  return (
    <>
      <ul id="list">
        <TodoItems
          todos={todos}
          toggleChecked={toggleChecked}
          handleDelete={handleDelete}
        />
      </ul>
      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={newTodoName}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTodos}>Add Todo</button>
        <div>To do {todos.filter((todo) => !todo.completed).length}</div>
      </div>
    </>
  );
}

export default App;
