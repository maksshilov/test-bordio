import styled from "styled-components";
import * as COLORS from "../../const/colors";

interface ISideBarContainerProps {}

export const SideBarContainer = styled.div<ISideBarContainerProps>`
  width: 219px;
  height: 100%;
  background-color: ${COLORS.SIDEBAR_BG};
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  & .search-container {
    width: 100%;
    height: 32px;
    display: flex;
    justify-content: center;
    margin-top: 26px;

    & .search-wrapper {
      width: 187px;
      height: 100%;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: ${COLORS.SIDEBAR_SEARCH_WRAPPER_BG};

      & > input {
        width: 143px;
        height: 14px;
        background-color: transparent;
        margin-left: 10px;
        padding: 0;
        border: 0;
        outline: none;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 14px;
        color: ${COLORS.SIDEBAR_SEARCH_INPUT_VALUE};
        &::placeholder {
          color: ${COLORS.SIDEBAR_SEARCH_INPUT_PLACEHOLDER};
        }
      }

      & img {
        width: 16px;
        height: 16px;
        margin: 8px;
      }
    }
  }

  & .workspace-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 34px;
    background-color: ${COLORS.SIDEBAR_SEARCH_WRAPPER_BG};
    margin-top: 19px;

    & .avatar-container {
      display: flex;
      margin: 0px 8px 0px 16px;
      & img {
        width: 22px;
        height: 22px;
        border-radius: 100%;
      }
    }

    & p.label {
      margin: 0;
      vertical-align: middle;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 14px;
      color: ${COLORS.SIDEBAR_WORKSPACE_LABEL};
    }
  }
`;
