import styled from "styled-components/macro";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 100%;
  padding: ${({ theme }) => theme.padding};
  color: white;
`;

export const Title = styled.h3`
  margin-bottom: 20px;
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 30vh;
  overflow: auto;
`;
