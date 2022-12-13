import React from "react";
import { Todo, useTodosDispatch } from "../contexts/TodosContext";
import "./TodoItem.css";

export type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useTodosDispatch();

  const onToggle = () => {
    dispatch({ type: "TOGGLE", id: todo.id });
  };

  const onRemove = () => {
    dispatch({ type: "REMOVE", id: todo.id });
  };

  return (
    <li className={`TodoItem ${todo.done ? "done" : ""}`}>
      <span className="text" onClick={onToggle}>
        {todo.text}
      </span>
      <span className="remove" onClick={onRemove}>
        (X)
      </span>
    </li>
  );
};

export default TodoItem;
