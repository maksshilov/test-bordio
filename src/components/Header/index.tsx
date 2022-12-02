import React, { FC } from "react";
import { HEADER_SEARCHBAR_BG, HEADER_SEARCHBAR_FONT } from "../../const/colors";
import { Avatar } from "../Avatar";
import { SearchBar } from "../SearchBar";
import { DropDown } from "./modules/DropDown";
import { HeaderContainer } from "./style";

const KANBAN_DROPDOWN_ITEMS = ["Board view", "Table view", "Kanban"];
const FILTER_DROPDOWN_ITEMS = ["Filter", "Holy Filter", "F**k yeah!"];

interface IHeaderProps {}

export const Header: FC<IHeaderProps> = () => {
  return (
    <HeaderContainer>
      <div className="btns-container">
        <div className="btn add">+ Add new</div>
        <DropDown items={KANBAN_DROPDOWN_ITEMS} />
        <DropDown items={FILTER_DROPDOWN_ITEMS} />
      </div>
      <div className="other-tools-container">
        <SearchBar bgColor={HEADER_SEARCHBAR_BG} borderRadius={40} mr={0} height={40} inputMl={16} valueColor={HEADER_SEARCHBAR_FONT} />
        <div className="notifications-container">
          <img src="/img/bell.png" alt="bell" />
          <div className="counter-container">
            <span className="counter">+99</span>
          </div>
        </div>
        <Avatar size={40} ml={20} />
      </div>
    </HeaderContainer>
  );
};
