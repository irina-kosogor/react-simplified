import { Todo } from "./App";

interface TodoProps {
  todos: Todo[];
  toggleChecked: (id: string) => void;
  handleDelete: (id: string) => void;
}

const TodoItems = ({ todos, toggleChecked, handleDelete }: TodoProps) => {
  return todos.map((todo) => {
    return (
      <li className="list-item" key={todo.id}>
        <label className="list-item-label">
          <input
            type="checkbox"
            data-list-item-checkbox
            checked={todo.completed}
            onChange={() => toggleChecked(todo.id)}
          />
          <span data-list-item-text>{todo.name}</span>
        </label>
        <button data-button-delete onClick={() => handleDelete(todo.id)}>
          Delete
        </button>
      </li>
    );
  });
};

export default TodoItems;
