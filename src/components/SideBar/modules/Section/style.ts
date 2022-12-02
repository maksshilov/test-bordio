import styled from "styled-components";
import * as COLORS from "../../../../const/colors";

interface ISectionContainerProps {
  isUnfold: boolean;
  itemsContainerHeight: number;
}

export const SectionContainer = styled.div<ISectionContainerProps>`
  width: 100%;
  padding-left: 16px;
  display: flex;
  align-items: start;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 18px;

  &:first-of-type {
    margin-top: 13px;
  }

  & .section-label-container {
    height: 24px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 7px;

    & img {
      width: 10px;
      height: 10px;
      margin-right: 15px;
      transform: rotate(${({ isUnfold }) => (isUnfold ? "0deg" : "-90deg")});
      transition: all 0.3s ease-in-out;
    }

    & p.section-label {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 14px;
      color: ${COLORS.SIDEBAR_WORKSPACE_LABEL};
      margin: 0;
    }
  }

  & .section-items-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: auto;
    overflow: hidden;
    height: ${({ isUnfold, itemsContainerHeight }) => (isUnfold ? `${itemsContainerHeight}px` : "0")};
    opacity: ${({ isUnfold }) => (isUnfold ? 1 : 0)};
    visibility: ${({ isUnfold }) => (isUnfold ? "visible" : "hidden")};
    transition: all 0.3s ease-in-out;

    & p.section-item {
      cursor: pointer;
      margin: 18px 0 0 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: ${COLORS.SIDEBAR_SECTION_ITEM};
    }
  }
`;
