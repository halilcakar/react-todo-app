import { useState } from "react";
import { v4 as uuid } from "uuid";

import { Todos } from "../types";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todos>([
    {
      id: uuid(),
      title: "Finish React Series",
      isCompleted: false,
    },
    {
      id: uuid(),
      title: "Go Grocery",
      isCompleted: true,
    },
    {
      id: uuid(),
      title: "Take over world",
      isCompleted: false,
    },
  ] as Todos);

  const addTodo = (title: string) => {
    setTodos([
      ...todos,
      {
        id: uuid(),
        title,
        isCompleted: false,
        isEditing: false,
      },
    ]);
  };

  const deleteTodo = (id: string) => {
    setTodos([...todos].filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      })
    );
  };

  const editTodo = (id: string, editing = true) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.isEditing = editing;
        }
        return todo;
      })
    );
  };

  const updateTodo = (title: string, id: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          if (title.trim().length === 0) {
            todo.isEditing = false;
            return todo;
          }

          todo.title = title;
          todo.isEditing = !todo.isEditing;
        }
        return todo;
      })
    );
  };

  const isAllCompleted = () => {
    return todos.every((ch) => ch.isCompleted);
  };

  const checkAll = () => {
    setTodos(todos.map((todo) => ({ ...todo, isCompleted: true })));
  };

  const clearCompleted = () => {
    setTodos([...todos].filter((todo) => !todo.isCompleted));
  };

  return {
    todos,
    setTodos,
    addTodo,
    deleteTodo,
    toggleTodo,
    editTodo,
    updateTodo,
    isAllCompleted,
    checkAll,
    clearCompleted,
  };
};
