import styled from "styled-components";

interface IContentContainerProps {
  width: number;
}

export const ContentContainer = styled.div<IContentContainerProps>`
  width: ${({ width }) => width}px;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  & .content-container {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
