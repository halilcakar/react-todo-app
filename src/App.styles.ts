import styled from "styled-components";

export const Wrapper = styled.main`
  min-height: 100vh;
  padding: 10px;
  background: #f3f4f6;
`;

export const Content = styled.div`
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

export const Header = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const CheckAllContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #6b7280;
  margin-top: 1.25rem;
  padding-top: 1rem;
  border-top: 1px solid lightgray;
`;

export const Button = styled.button`
  color: #6b7280;
  font-size: 14px;
  background: white;
  border: 1px solid lightgray;
  padding: 6px;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    border: 1px solid lightgray;
  }
`;

type Prop = {
  active?: boolean;
};

export const FilterButton = styled(Button)<Prop>`
  border: 1px solid ${(props) => (props.active ? "lightgray" : "white")};
`;

export const OtherButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #6b7280;
  margin-top: 1.375rem;
  padding-top: 1rem;
  border-top: 1px solid lightgray;
`;
