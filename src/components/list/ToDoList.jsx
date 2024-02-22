import React from "react";

export default function ToDoList(props) {
  return (
    <div className="center-container">
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {props.todos.map((todo, id) => {
          return (
            <li key={id}>
              <label>
                <input type="checkbox" checked={todo.completed} onChange={(e) => props.toggleTodo(todo.id, e.target.checked)}/>
                {todo.title}
                <button className="btn" onClick = {() => props.editTodo(todo.id)}>Edit</button>
                <button className="btn btn-danger"onClick = {() => props.deleteTodo(todo.id)}>Delete</button>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}