import { ITodoProps } from "../types";

const Todo = ({ todo, onDelete, onComplete, onEdit }: ITodoProps) => {
  return (
    <div>
      <input
        onChange={() => onComplete(todo.id)}
        type="checkbox"
        checked={todo.complete}
      />
      <span>{todo.complete ? <s>{todo.title}</s> : todo.title}</span>
      <button onClick={() => onDelete(todo.id)}>delete</button>
      <button
        onClick={() => {
          onEdit(todo);
        }}
      >
        edit
      </button>
    </div>
  );
};

export default Todo;
