import React, { FC } from "react";
import { Section } from "./modules/Section";
import { SideBarContainer } from "./style";
import sections from "../../mockData/sections.json";
import { Logo } from "../Logo";
import { SearchBar } from "../SearchBar";
import { Avatar } from "../Avatar";

interface ISideBarProps {}

export const SideBar: FC<ISideBarProps> = () => {
  const sectionsMapped = sections.map((section, idx) => <Section label={section.label} items={section.items} key={idx} />);

  return (
    <SideBarContainer>
      <Logo />

      <SearchBar />

      <div className="workspace-container">
        <Avatar />
        <p className="label">My workspace</p>
      </div>

      {sectionsMapped}
    </SideBarContainer>
  );
};
