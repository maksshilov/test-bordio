import styled from "styled-components";
import * as COLORS from "../../const/colors";

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

    & .create-status {
      display: flex;
      min-width: 300px;
      height: 100%;

      & .label-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 55px;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        border-bottom: 2px solid ${COLORS.COLUMN_BORDER};
        border-left: 2px solid ${COLORS.COLUMN_BORDER};

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
      }
    }
  }
`;
