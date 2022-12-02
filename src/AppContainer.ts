import styled from "styled-components";

interface IProps {}

export const AppContainer = styled.div<IProps>`
  display: flex;
  width: 100vw;
  height: 100vh;

  img {
    object-fit: contain;
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }
`;
