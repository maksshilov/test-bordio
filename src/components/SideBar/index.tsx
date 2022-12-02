import React, { FC } from "react";
import { Section } from "./modules/Section";
import { SideBarContainer } from "./style";
import sections from "../../mockData/sections.json";
import { Logo } from "../Logo";

interface ISideBarProps {}

export const SideBar: FC<ISideBarProps> = () => {
  const sectionsMapped = sections.map((section, idx) => <Section label={section.label} items={section.items} key={idx} />);

  return (
    <SideBarContainer>
      <Logo />

      <div className="search-container">
        <div className="search-wrapper">
          <input type="text" name="search" id="search" placeholder="Search..." />
          <img src="/img/Search.png" alt="" />
        </div>
      </div>

      <div className="workspace-container">
        <div className="avatar-container">
          <img src="/img/ava.png" alt="avatar" />
        </div>
        <p className="label">My workspace</p>
      </div>

      {sectionsMapped}
    </SideBarContainer>
  );
};
