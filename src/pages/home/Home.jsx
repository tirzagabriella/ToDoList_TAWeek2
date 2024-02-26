import React, { useState } from "react";
import AddItemForm from "../../components/form/AddItemForm";
import ToDoList from "../../components/list/ToDoList";
import Modal from "../../components/modal/Modal";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [on, setOn] = useState(false);
  const [editedValue, setEditedValue] = useState("");
  const [editedId, setEditedId] = useState(null);

  const toggle = () => {
    setOn((on) => !on); // everytime this function triggered it will change the modal apperance
  };
  const navigate = useNavigate();
  const navtoSplash = () => {
    navigate("/ToDoList_TAWeek2/");
  };

  function handleSubmit(e) {
    e.preventDefault(); // prevent website from refreshing

    setTodos((currentTodos) => {
      // duplicate the current todos and add the new one
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });

    setNewItem(""); // set the box into "" after clicking add button
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function editTodo(id, title) {
    setEditedId(id);
    setEditedValue(title);
    toggle();
  }

  function confirmEdit(newValue) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id == editedId) {
          return { ...todo, title: newValue };
        }

        return todo;
      });
    });

    setEditedValue("");

    toggle();
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <button
        className="bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={navtoSplash}
      >
        Back
      </button>
      <AddItemForm
        handleSubmit={handleSubmit}
        newItem={newItem}
        setNewItem={setNewItem}
      />

      <ToDoList
        todos={todos}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
        toggle={toggle}
        deleteTodo={deleteTodo}
      />

      {on && (
        <Modal
          toggle={toggle}
          editedValue={editedValue}
          setEditedValue={setEditedValue}
          confirmEdit={confirmEdit}
        />
      )}
    </>
  );
}
