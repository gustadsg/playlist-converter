import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 30px;
  color: white;
  font-size: 18px;
`;

export const Button = styled.div`
  background-color: ${({ theme }) => theme.primary};
  padding: 7px 7px;
  border-radius: 30px;
`;
