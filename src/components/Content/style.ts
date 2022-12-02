import styled from "styled-components";

interface IContentContainerProps {}

export const ContentContainer = styled.div<IContentContainerProps>`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  background-color: antiquewhite;
`;
