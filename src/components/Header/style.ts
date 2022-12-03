import styled from "styled-components";
import * as COLORS from "../../const/colors";

interface IProps {}

export const HeaderContainer = styled.div<IProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  background-color: ${COLORS.HEADER_BG};
  padding: 20px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border-bottom: 2px solid ${COLORS.COLUMN_BORDER};

  & .btns-container {
    display: flex;

    & .btn {
      cursor: pointer;
      border-radius: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 12px 20px;
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: black;
      margin-right: 16px;
      position: relative;
      width: auto;

      &:last-of-type {
        margin-right: 0px;
      }

      &:hover {
        /* opacity: 0.75; */
      }

      transition: all 0.3s ease;

      &.add {
        background-color: ${COLORS.HEADER_BTN_ADD_BG};
        color: ${COLORS.HEADER_BTN_ADD_FONT};
      }

      &.drop-down {
        background-color: ${COLORS.HEADER_BTN_DROPDOWN};
        &.active {
          background-color: ${COLORS.HEADER_BTN_DROPDOWN_ACTIVE};
        }
        transition: all 0.3s ease;
        overflow: visible;
        position: relative;

        & .drop-down-container {
          position: absolute;
          display: flex;
          bottom: 0;
          left: 0;
          transform: translateY(calc(100%));
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          width: 132px;
          padding: 6px;
          box-sizing: border-box;
          -moz-box-sizing: border-box;
          -webkit-box-sizing: border-box;
          background-color: ${COLORS.HEADER_BTN_DROPDOWN_CONTAINER_BG};
          border-radius: 4px;
          opacity: 0;
          visibility: hidden;
          filter: drop-shadow(0 3px 8px rgba(0, 0, 0, 0.15));

          &.active {
            opacity: 1;
            visibility: visible;
            transform: translateY(calc(100% + 8px));
          }

          transition: all 0.3s ease;

          & .drop-down-item {
            width: 100%;
            border-radius: 4px;
            padding: 12px 8px;
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            background-color: ${COLORS.HEADER_BTN_DROPDOWN_ITEM_BG};

            &:hover {
              background-color: ${COLORS.HEADER_BTN_DROPDOWN_ITEM_BG_ACTIVE};
            }
            transition: all 0.3s ease;
          }
        }
      }

      & img {
        width: 10px;
        height: 10px;
        margin-left: 15px;
        transform: rotate(180deg);
        &.active {
          transform: rotate(0deg);
        }
        transition: all 0.3s ease;
      }
    }
  }

  & .other-tools-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    & .notifications-container {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      position: relative;

      &:hover {
        transform: scale(1.2);
      }

      transition: all 0.3s ease;

      & img {
        width: 21px;
        height: 21px;
      }

      & .counter-container {
        position: absolute;
        left: 50%;
        top: -15%;
        border-radius: 4px;

        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 20px;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        border: 1px solid #fff;
        background-color: ${COLORS.HEADER_NOTIFICATION_COUNTER_BG};

        & span.counter {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 8px;
          line-height: 8px;
          color: ${COLORS.HEADER_NOTIFICATION_COUNTER_FONT};
        }
      }
    }
  }
`;
