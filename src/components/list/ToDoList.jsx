import React from "react";

export default function ToDoList(props) {
  return (
    <div className="center-container">
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {props.todos.map((todo, id) => {
          return (
            <li key={id}>
              <label className="w-full">
                <div className="flex items-center justify-between w-full">
                  <div className="flex">
                    <input type="checkbox" checked={todo.completed} onChange={(e) => props.toggleTodo(todo.id, e.target.checked)}/>
                    <div className="max-w-52">{todo.title}</div>
                  </div>
                  <div>
                    <button className="btn" onClick = {() => props.editTodo(todo.id, todo.title)}>Edit</button>
                    <button className="btn btn-danger ml-2"onClick = {() => props.deleteTodo(todo.id)}>Delete</button>
                  </div>
                </div>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}