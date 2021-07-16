import { FC } from "react";

// Components & Types
import TodoContainer from "../TodoContainer";
import { Todos } from "../../types";

// Styles
import { Wrapper } from "./TodoList.styles";

type Props = {
  todos: Todos;
};

const TodoList: FC<Props> = ({ todos }) => {
  return (
    <Wrapper>
      {todos.map((todo) => (
        <TodoContainer key={todo.id} todo={todo} />
      ))}
    </Wrapper>
  );
};

export default TodoList;
