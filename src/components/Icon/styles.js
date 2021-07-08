import styled from "styled-components/macro";

export const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.8);
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 7px;
  margin: 0 5px;
  color: ${({ theme }) => theme.primary};

  cursor: pointer;
`;
