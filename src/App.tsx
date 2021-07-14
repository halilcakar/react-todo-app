import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Content>
        <Header>Todo App</Header>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  min-height: 100vh;
  padding: 10px;
  background: #f3f4f6;
`;

const Content = styled.div`
  margin: auto;
  margin-top: 30px;
  padding: 2rem;
  background: white;
  border-radius: 0.25rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  max-width: 32rem;
  color: #374151;
`;

const Header = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

export default App;
