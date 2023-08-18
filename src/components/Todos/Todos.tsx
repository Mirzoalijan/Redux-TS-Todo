import { useDispatch, useSelector } from "react-redux";
import "../../App.css";
import { ITodo } from "./types";
import { RootState } from "../../store/store";
import Todo from "./Todo/Todo";
import {addTodo,onComplete,onDelete,editTodo,} from "../../reducers/slice";
import { useState } from "react";

function Todos() {
  const todos: ITodo[] = useSelector((state: RootState) => state.todos);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [comp, setComp] = useState<boolean>(false);
  const [editIdx, setEditIdx] = useState<number>(0);
  const [textEdit, setTextEdit] = useState<string>("");
  const dispatch = useDispatch();

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e.currentTarget.todo.value.trim().length === 0) {
      alert("Add Title");
    } else {
      const text = e.currentTarget.todo.value;
      const id = Date.now();
      dispatch(addTodo({ id, text }));
      e.currentTarget.todo.value = "";
    }
  };

  const edit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const textEdit = event.currentTarget.edit.value
    dispatch(
      editTodo({
        editIdx,
        textEdit,
        comp,
      })
    );
    setEditModal(false)
  };
  return (
    <>
      <h1>Todo list</h1>
      <form onSubmit={handleAdd}>
        <input
          required={true}
          name="todo"
          className="border"
          type="text"
          placeholder="Add title"
        />
        <button type="submit">Add</button>
      </form>

      <div>
        {todos.map((todo: ITodo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              onDelete={(id: number) => {
                dispatch(onDelete(id));
              }}
              onComplete={(id: number) => {
                dispatch(onComplete(id));
              }}
              onEdit={(obj: ITodo) => {
                setEditModal(true);
                setComp(obj.complete);
                setTextEdit(obj.title);
                setEditIdx(obj.id);
              }}
            />
          );
        })}
        {editModal ? (
          <div>
            <form onSubmit={edit}>
              <input
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setTextEdit(event.target.value);
                }}
                value={textEdit}
                required={true}
                name="edit"
                className="border"
                type="text"
                placeholder="edit title"
              />
              <button  type="submit">edit</button>
              <button type="submit" onClick={() => setEditModal(false)}>cansel</button>
            </form>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Todos;
