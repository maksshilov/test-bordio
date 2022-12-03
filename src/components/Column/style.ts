import styled from "styled-components";
import * as COLORS from "../../const/colors";

interface IColumnContainerProps {}

export const ColumnContainer = styled.div<IColumnContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 300px;
  height: 100%;

  &:last-child {
    border-right: 2px solid ${COLORS.COLUMN_BORDER};
  }

  & > .label-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 58px;
    border-bottom: 2px solid ${COLORS.COLUMN_BORDER};

    & .label {
      display: flex;
      justify-content: center;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      color: ${COLORS.COLUMN_LABEL_FONT};
    }

    & .counter {
      margin-left: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 20px;
      padding: 2px 9px;
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: ${COLORS.COLUMN_COUNTER_FONT};
      background-color: ${COLORS.COLUMN_COUNTER_BG};
    }
  }

  & .cards-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-right: 2px solid ${COLORS.COLUMN_BORDER};

    & .drop-start {
      width: 90%;
      height: 39px;
    }
    & .drop-end {
      width: 90%;
      flex: 1 1 auto;
    }

    &.over {
      background-color: #71bc773b;
    }

    & .drop-preview {
      display: flex;
      width: 270px;
      height: 0px;
      background-color: yellow;
      margin-bottom: 0px;
      border-radius: 10px;

      &.in {
        animation-name: in;
        animation-duration: 0.3s;
        animation-timing-function: ease;
        animation-delay: 0.1s;
        animation-iteration-count: 1;
        animation-direction: normal;
        animation-fill-mode: forwards;
        animation-play-state: running;

        @keyframes in {
          from {
            height: 0px;
            margin-bottom: 0px;
          }
          to {
            height: 10px;
            margin-bottom: 10px;
          }
        }
      }
      &.out {
        animation-name: out;
        animation-duration: 0.3s;
        animation-timing-function: ease;
        animation-delay: 0s;
        animation-iteration-count: 1;
        animation-direction: normal;
        animation-fill-mode: forwards;
        animation-play-state: running;

        @keyframes out {
          from {
            height: 10px;
            margin-bottom: 10px;
          }
          to {
            height: 0px;
            margin-bottom: 0px;
          }
        }
      }
    }

    transition: all 0.3s ease;
  }
`;
