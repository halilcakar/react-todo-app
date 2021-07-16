// Styles
import {
  Wrapper,
  Content,
  Header,
  Button,
  CheckAllContainer,
  OtherButtonsContainer,
  FilterButton,
} from "./App.styles";

// Components
import NoTodos from "./components/NoTodos";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useGlobalContext } from "./Context";

const App = () => {
  const { todos, isAllCompleted, checkAll, clearCompleted } =
    useGlobalContext();

  return (
    <Wrapper>
      <Content>
        <Header>Todo App</Header>
        <TodoForm />

        {todos.length ? <TodoList todos={todos} /> : <NoTodos />}

        {isAllCompleted() ? null : (
          <CheckAllContainer>
            <Button onClick={checkAll}>Check All</Button>

            <span>
              {todos.filter((ch) => !ch.isCompleted).length} items remaining.
            </span>
          </CheckAllContainer>
        )}

        <OtherButtonsContainer>
          {isAllCompleted() ? null : (
            <div>
              <FilterButton
                active
                onClick={() => {
                  /* setFilter("All") */
                }}
              >
                All
              </FilterButton>
              <FilterButton
                onClick={() => {
                  /* setFilter("Active") */
                }}
              >
                Active
              </FilterButton>
              <FilterButton
                onClick={() => {
                  /* setFilter("Completed") */
                }}
              >
                Completed
              </FilterButton>
            </div>
          )}

          {todos.length ? (
            <Button onClick={clearCompleted}>Clear completed</Button>
          ) : null}
        </OtherButtonsContainer>
      </Content>
    </Wrapper>
  );
};

export default App;
