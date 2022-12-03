import React, { FC, useState } from "react";
import { SectionContainer } from "./style";

const ITEM_HEIGHT = 34;

interface ISectionProps {
  label: string;
  items: string[];
}

export const Section: FC<ISectionProps> = ({ label, items }) => {
  const [isUnfold, setIsUnfold] = useState<boolean>(true);
  const itemsContainerHeight = items.length * ITEM_HEIGHT;

  const handleSetIsUnfold = () => setIsUnfold((state) => !state);

  const itemsMapped = items.map((item, idx) => (
    <p className="section-item" key={idx}>
      {item}
    </p>
  ));

  return (
    <SectionContainer isUnfold={isUnfold} itemsContainerHeight={itemsContainerHeight}>
      <div className="section-label-container" onClick={handleSetIsUnfold}>
        <img src="/img/arrow-down.png" alt="section-arrow" />
        <p className="section-label">{label}</p>
      </div>
      <div className="section-items-container">{itemsMapped}</div>
    </SectionContainer>
  );
};
