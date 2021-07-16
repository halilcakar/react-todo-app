import {
  FC,
  useState,
  Dispatch,
  createContext,
  useContext,
  SetStateAction,
} from "react";
import { v4 as uuid } from "uuid";
import { useTodos } from "./hooks/useTodos";
import { Todos } from "./types";

export type ContextType = {
  todos: Todos;
  setTodos: Dispatch<SetStateAction<Todos>>;
  addTodo: (title: string) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  editTodo: (id: string, editing?: boolean) => void;
  updateTodo: (event: any, id: string) => void;
  isAllCompleted: () => boolean;
  checkAll: () => void;
  clearCompleted: () => void;
};

export const Context = createContext<ContextType>({
  todos: [],
  setTodos: () => {},
  addTodo: () => {},
  deleteTodo: () => {},
  toggleTodo: () => {},
  editTodo: () => {},
  updateTodo: () => {},
  isAllCompleted: () => true,
  checkAll: () => {},
  clearCompleted: () => {},
});

export const useGlobalContext = () => useContext(Context);

export const Provider: FC = ({ children }) => {
  const {
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
  } = useTodos();

  return (
    <Context.Provider
      value={{
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
      }}
    >
      {children}
    </Context.Provider>
  );
};
