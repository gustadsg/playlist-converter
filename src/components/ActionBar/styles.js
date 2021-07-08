import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  position: relative;

  padding-left: ${({ theme }) => theme.padding};
  margin: 30px 0;

  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  color: white;
  width: 100%;
  height: 60px;
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 30px;
  height: 100%;

  border: none;
  outline: none;
  color: white;
  cursor: pointer;
`;
