import React from "react";
import styled from "styled-components";
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props ? props.color : "gray")};
  color: #0f0e0e;

  font-size: 1em;
  margin: 0.1em;
  padding: 0.25em 1em;
  border: 1px;
  border-radius: 3px;
`;

export default Button;
