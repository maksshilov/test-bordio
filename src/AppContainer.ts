import styled from "styled-components";

interface IProps {}

export const AppContainer = styled.div<IProps>`
  display: flex;
  flex-direction: column;
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

  & .lottie {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: black;
  }

  & .header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    min-height: 100px;
    background-color: white;

    & .logo {
      width: 183px;
    }

    & .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 501px;

      & > .item {
        font-family: "NeueMachina-Regular";
        size: 18px;
        color: #0046cc;
      }
    }
    & .btns {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 112px;
      margin-left: 200px;
      & img {
        width: 50px;
      }
    }
  }

  & .block-1 {
    display: flex;
    width: 100vw;
    /* min-height: 750px; */
    & > .item-active {
      width: 60%;
      /* height: 100%; */
      & img {
        width: 100%;
      }
    }
    & > .item-not-active {
      width: 20%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fbfbfb;
      border: 1px solid #d9d9d9;
      border-right: 0;
      & img {
        height: 130px;
      }
    }
  }
`;
