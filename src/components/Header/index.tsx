import React, { FC } from "react";
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
    </HeaderContainer>
  );
};
