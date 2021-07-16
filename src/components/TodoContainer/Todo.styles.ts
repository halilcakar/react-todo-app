import styled from "styled-components";

export const Content = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;

  span {
    margin-left: 16px;
  }

  input[type="text"] {
    margin-left: 8px;
    width: 100%;
    border: none;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    padding: 6px 8px;
    font-size: 18px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  font-size: 1.125rem;
  margin-right: 1.5rem;
`;

type ISpan = {
  isCompleted: boolean;
  onDoubleClick: () => void;
};

export const Span = styled.span<ISpan>`
  margin-left: 16px;

  text-decoration: ${(props) => (props.isCompleted ? "line-through" : "none")};
`;

export const DeleteButton = styled.button`
  background: white;
  color: #6b7280;
  border: none;
  cursor: pointer;

  :hover {
    color: #1f2937;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
