import styled from "styled-components";

interface IProps {}

export const AppContainer = styled.div<IProps>`
  display: flex;
  align-items: center;
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
      & img {
        width: 50px;
      }
    }
  }

  & .block-1 {
    margin-bottom: 5vh;
    display: flex;
    width: 100vw;
    min-height: 600px;
    overflow: hidden;
    /* height: 100%; */
    & > .item-active {
      width: 60%;
      height: 100%;
      & img {
        object-fit: cover;
        width: 100%;
      }
    }

    & > .item-not-active {
      width: 20%;
      /* height: 100%; */
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fbfbfb;
      border: 1px solid #d9d9d9;
      border-right: 0;
      box-sizing: border-box;
      & img {
        height: 130px;
      }
    }
  }

  & .block-2 {
    margin-bottom: 5vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60vw;
    & > .item {
      font-family: "NeueMachina-Bold";
      font-size: 2vw;
      color: #0046cc;
      text-align: center;
      line-height: 5vh;
    }
  }

  & .block-3 {
    margin-bottom: 5vh;
    width: 75vw;

    & .tab {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25vw;
      height: 4vw;
      border: 2px solid #0046cc;
      border-bottom: 0;
      font-family: "NeueMachina-Bold";
      font-size: 23px;
      color: #0046cc;
    }

    & .tab-contain {
      border: 2px solid #0046cc;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      box-sizing: border-box;
      padding: 2vw;

      & .description {
        width: 21vw;
        font-family: "NeueMachina-Regular";
        font-size: 16px;
        line-height: 160%;
      }

      & .posters {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        /* filter: drop-shadow(0 0 2vw #0046cc); */
        /* box-shadow: 0 0 1vw #0046cc; */
        & > img {
          width: 10vw;
          margin-right: 2vw;
          &:last-of-type {
            margin-right: 0;
          }
        }
        & .blur {
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: #0046cc66;
          filter: blur(50px);
          z-index: -1;
        }
      }
    }
  }

  & .footer {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    min-height: 100px;
    background-color: #0046cc;

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
        color: white;
      }
    }
    & .tel {
      font-family: "NeueMachina-Bold";
      font-size: 18px;
      color: white;
    }
  }

  & .footer-2 {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #0046cc;
    box-sizing: border-box;
    padding: 26px 100px;
    & > .item {
      font-family: "NeueMachina-Regular";
      font-size: 16px;
      color: white;
    }
  }
`;
