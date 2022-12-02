import React, { FC } from "react";
import { SIDEBAR_SEARCH_INPUT_VALUE, SIDEBAR_SEARCH_WRAPPER_BG } from "../../const/colors";
import { SearchBarContainer } from "./style";

export interface ISearchBarProps {
  borderRadius?: number;
  bgColor?: string;
  mr?: number;
  height?: number;
  inputMl?: number;
  valueColor?: string;
}

export const SearchBar: FC<ISearchBarProps> = ({
  borderRadius = 4,
  bgColor = SIDEBAR_SEARCH_WRAPPER_BG,
  mr = 0,
  height = 32,
  inputMl = 10,
  valueColor = SIDEBAR_SEARCH_INPUT_VALUE,
}) => {
  const searchBarContainerProps = { borderRadius, bgColor, mr, height, inputMl, valueColor };

  return (
    <SearchBarContainer {...searchBarContainerProps}>
      <div className="search-wrapper">
        <input type="text" name="search" id="search" placeholder="Search..." />
        <img src="/img/Search.png" alt="" />
      </div>
    </SearchBarContainer>
  );
};
