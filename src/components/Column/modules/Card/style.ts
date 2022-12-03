import styled from "styled-components";
import { ICard } from "../../../../types";
import * as COLORS from "../../../../const/colors";

interface ICardContainerProps extends Pick<ICard, "color"> {
  isDragging: boolean;
  status: ICard["status"];
}

export const CardContainer = styled.div<ICardContainerProps>`
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 15px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  background-color: ${({ color, status }) => (status === "Completed" ? COLORS.COLUMN_COUNTER_BG : color)};
  border-radius: 8px;
  min-width: 270px;
  max-width: 270px;
  flex-direction: column;
  margin-bottom: 10px;
  opacity: ${({ isDragging }) => (isDragging ? 0.5 : 1)};
  transition: all 0.3s ease;

  &:last-of-type {
    margin-bottom: 0;
  }

  & .drop {
    width: 100%;
    height: 100%;

    & .description {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      text-decoration-line: ${({ status }) => (status === "Completed" ? "line-through" : "auto")};
      color: ${({ status }) => (status === "Completed" ? COLORS.CARD_COMPLETED_FONT : COLORS.CARD_DESCRIPTION_FONT)};
    }

    & .duration {
      margin-top: 2px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 15px;
      text-decoration-line: ${({ status }) => (status === "Completed" ? "line-through" : "auto")};
      color: ${({ status }) => (status === "Completed" ? COLORS.CARD_COMPLETED_FONT : COLORS.CARD_DURATION_FONT)};
    }
  }
`;
