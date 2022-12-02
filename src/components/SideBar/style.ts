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

  & .workspace-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 34px;
    background-color: ${COLORS.SIDEBAR_SEARCH_WRAPPER_BG};
    margin-top: 19px;
    padding: 8px 0 8px 16px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;

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
