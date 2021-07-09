import styled from "styled-components/macro";

export const Input = styled.input`
  background: transparent;
  color: white;
  font-size: 18px;
  height: 100%;
  width: 100%;

  border: none;
  outline: none;

  &::placeholder {
    color: white;
    opacity: 0.5;
  }
`;
