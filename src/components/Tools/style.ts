import styled from "styled-components";
import * as COLORS from "../../const/colors";

interface IToolsContainerProps {
  activeToolsIdx: number;
}

export const ToolsContainer = styled.div<IToolsContainerProps>`
  width: 154px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.TOOLS_BG};

  & > p.label {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: ${COLORS.TOOLS_LABEL_FONT};
    margin: 24px 0 26px 16px;
  }

  & .tools-items-container {
    width: 100%;
    position: relative;

    & .item {
      cursor: pointer;
      z-index: 1;
      width: 138px;
      height: 50px;
      padding-left: 10px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      position: relative;
      background-color: transparent;

      & img {
        width: 28px;
        height: 28px;
        margin-right: 10px;
      }

      & p.label {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: ${COLORS.TOOLS_ITEM_LABEL};
        &.active {
          color: ${COLORS.TOOLS_ITEM_LABEL_ACTIVE};
        }
        transition: color 0.3s ease;
      }
    }

    & .item-active {
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;
      width: 138px;
      height: 50px;
      border-radius: 0px 8px 8px 0px;
      transform: translateY(${({ activeToolsIdx }) => activeToolsIdx * 50}px);
      transition: transform 0.3s ease;

      &::before {
        content: "";
        border-radius: 0px 10px 10px 0px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        width: 4.12px;
        height: 100%;
        background-color: ${COLORS.TOOLS_ITEM_LABEL_ACTIVE};
      }
    }
  }
`;
