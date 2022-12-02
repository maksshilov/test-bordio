import styled from "styled-components";
import { ISearchBarProps } from ".";
import * as COLORS from "../../const/colors";

interface ISearchBarContainerProps extends ISearchBarProps {}

export const SearchBarContainer = styled.div<ISearchBarContainerProps>`
  width: 219px;
  height: ${({ height }) => height}px;
  display: flex;
  justify-content: center;
  margin-right: ${({ mr }) => mr}px;

  & .search-wrapper {
    width: 187px;
    height: 100%;
    border-radius: ${({ borderRadius }) => borderRadius}px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ bgColor }) => bgColor};

    & > input {
      width: 123px;
      height: 14px;
      background-color: transparent;
      margin-left: ${({ inputMl }) => inputMl}px;
      padding: 0;
      border: 0;
      outline: none;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 14px;
      color: ${({ valueColor }) => valueColor};
      &::placeholder {
        color: ${COLORS.SIDEBAR_SEARCH_INPUT_PLACEHOLDER};
      }
    }

    & img {
      width: 16px;
      height: 16px;
      margin: ${({ inputMl }) => inputMl}px;
    }
  }
`;
