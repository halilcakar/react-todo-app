// Styles
import { FC } from "react";
import { useGlobalContext } from "../../Context";
import { Todo } from "../../types";
import { Content, InputGroup, Span, DeleteButton } from "./Todo.styles";

export type Props = {
  todo: Todo;
};

const TodoContainer: FC<Props> = ({ todo }) => {
  const { deleteTodo, toggleTodo, editTodo, updateTodo } = useGlobalContext();

  return (
    <Content key={todo.id}>
      <InputGroup>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => toggleTodo(todo.id)}
        />

        {!todo.isEditing ? (
          <Span
            isCompleted={todo.isCompleted}
            onDoubleClick={() => editTodo(todo.id)}
          >
            {todo.title}
          </Span>
        ) : (
          <input
            type="text"
            defaultValue={todo.title}
            onBlur={(event) => {
              updateTodo(event.target.value, todo.id);
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                editTodo(todo.id, false);
              }
              if (event.key === "Enter") {
                updateTodo((event.target as HTMLInputElement).value, todo.id);
              }
            }}
            autoFocus
          />
        )}
      </InputGroup>

      <DeleteButton onClick={() => deleteTodo(todo.id)}>
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </DeleteButton>
    </Content>
  );
};

export default TodoContainer;
