import { createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../components/Todos/types";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: ITodo[] = []

export const slice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    onDelete: (state:ITodo[], action: PayloadAction<number>) => {
      return state.filter((todo: ITodo) => todo.id !== action.payload);
    },
    addTodo: (state:ITodo[], action) => {
      const { id, text } = action.payload;
      state.push({ id, title: text, complete: false });
    },
    onComplete: (state:ITodo[], action : PayloadAction<number>) => {
      const id: number = action.payload;
      state.map((e) => {
        if (e.id === id) {
          e.complete = !e.complete;
        }
        return e;
      });
    },
    editTodo: (state: ITodo[], action) => {
      const { editIdx, textEdit, comp } = action.payload;
      state.map((todo: ITodo) => {
        if(todo.id == editIdx) {
          todo.title = textEdit;
          todo.complete = comp;
        }
        return todo;
      })
    }
  },
});

export const { onDelete, addTodo, onComplete, editTodo } = slice.actions;
export default slice.reducer;
