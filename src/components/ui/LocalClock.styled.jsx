import styled from "styled-components";

const LocalClockDiv = styled.div`
  display: flex;
  flex-direction: row;

  background: #dbc6c6;
  margin: 1rem 6.5rem;
  padding: 2rem;
  border-radius: 1rem;
  align-items: flex-end;

  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0.2rem;
    padding: 1rem;
  }
`;
export default LocalClockDiv;
