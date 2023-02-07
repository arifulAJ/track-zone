import styled from "styled-components";

const InputStyled = styled.input`
  font-size: 1.2rem;
  border: 1px solid gray;
  border-radius: 4px;
  margin: 2px;
  padding: 5px;
  width: 50%;
  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 1px;
    padding: 2px;
    width: 80%;
  }
`;
export default InputStyled;
