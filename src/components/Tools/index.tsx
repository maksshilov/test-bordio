import React, { FC, useState } from "react";
import { ToolsContainer } from "./style";

const TOOLS_LABELS = ["Roadmap", "Schedule", "Tasks", "Notes", "Files"];

enum EToolsLabels {
  Roadmap = "/img/icon-roadmap.png",
  Schedule = "/img/icon-schedule.png",
  Tasks = "/img/icon-tasks.png",
  Notes = "/img/icon-notes.png",
  Files = "/img/icon-files.png",
}

interface IToolsProps {}

export const Tools: FC<IToolsProps> = () => {
  const [activeToolsIdx, setActiveToolsIdx] = useState<number>(0);

  const toolsItems = TOOLS_LABELS.map((toolsLabel, idx) => {
    const handleOnClick = () => setActiveToolsIdx(() => idx);
    const styleIsActive = activeToolsIdx === idx ? "active" : "";
    return (
      <div className="item" key={idx} onClick={handleOnClick}>
        <img src={EToolsLabels[toolsLabel as keyof typeof EToolsLabels]} alt={toolsLabel} />
        <p className={`label ${styleIsActive}`}>{toolsLabel}</p>
      </div>
    );
  });

  return (
    <ToolsContainer activeToolsIdx={activeToolsIdx}>
      <p className="label">Tools</p>
      <div className="tools-items-container">
        {toolsItems}
        <div className="item-active" />
      </div>
    </ToolsContainer>
  );
};
