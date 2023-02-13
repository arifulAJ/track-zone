import styled from "styled-components";

const ClockListItems = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 33%);
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 49%);
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 98%);
  }
`;
export default ClockListItems;
