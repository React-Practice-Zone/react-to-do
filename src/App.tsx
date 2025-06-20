import { useEffect, useState } from "react";

import "./style.css";
import type { Todo } from "./todo.type";
import { TodoForm } from "./components/todo-form.component";
import { List } from "./components/list.component";

export default function App() {
  // ! Hooks in React essentially have to be called at the top level of a component.

  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState<Todo[]>(() => {
    const localValue = localStorage.getItem("todos");

    if (localValue === null) return [];

    return JSON.parse(localValue) as Todo[];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title: string) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function handleSubmit(e: Event) {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });

    setNewItem("");
  }

  function toggleTodo(id: string, completed: boolean) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id: string) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <TodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <List todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
