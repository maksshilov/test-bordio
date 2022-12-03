import React, { FC, useState } from "react";

interface IDropDownProps {
  items: string[];
}

export const DropDown: FC<IDropDownProps> = ({ items }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [activeItemIdx, setActiveItemIdx] = useState<number>(0);
  const handleSetIsActive = () => setIsActive((state) => !state);

  const styleIsActive = isActive ? "active" : "";

  const itemsMapped = items.map((item, idx) => {
    const handleSetActiveItemIdx = () => setActiveItemIdx(() => idx);
    return (
      <div className="drop-down-item" onClick={handleSetActiveItemIdx} key={idx}>
        {item}
      </div>
    );
  });

  return (
    <div className={`btn drop-down ${styleIsActive}`} onClick={handleSetIsActive}>
      {items[activeItemIdx]} <img className={styleIsActive} src="/img/arrow-up-grey.png" alt="arrow-up-grey" />
      <div className={`drop-down-container ${styleIsActive}`}>{itemsMapped}</div>
    </div>
  );
};
