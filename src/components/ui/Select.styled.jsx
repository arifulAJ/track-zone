import styled from "styled-components";

const SelectStyled = styled.select`
  font-size: 1.2rem;
  border: 2px sienna gray;
  border-radius: 4px;
  margin: 2px;
  padding: 5px;
  width: 30%;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 1px;
    padding: 2px;
    width: 50%;
  }
`;
export default SelectStyled;
