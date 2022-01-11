import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    _id: null,
    content: "",
  });

  const submitUpdate = (value) => {
    updateTodo({_id: edit._id,content: value.content});
    setEdit({
      _id: null,
      content: "",
    });
  };

  if (edit._id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.complete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo._id} onClick={() => completeTodo({_id: todo._id, complete:true})}>
        {todo.content}
      </div>

      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo({ _id: todo._id })}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ _id: todo._id, content: todo.content })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}

export default Todo;
