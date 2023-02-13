import styled from "styled-components";

const LocalClockDiv = styled.div`
  width: ${(props) => (props ? props.width : "80%")};
  display: flex;
  flex-direction: ${(props) => (props ? props.display : "row")};
  align-items: ${(props) => (props ? props.align : "flex-start")};
  background: #dbc6c6;
  margin: 1rem 1.5rem;
  padding: 1rem;
  border-radius: 1rem;

  justify-content: space-between;
  @media (max-width: 768px) {
    width: 80%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0.2rem;
    padding: 1rem;
  }
`;
export default LocalClockDiv;
