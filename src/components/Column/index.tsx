import React, { FC } from "react";
import { ColumnContainer } from "./style";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndContainer } from "./modules/DndContainer";
import { useAppSelector } from "../../redux/hooks";

export interface IColumnProps {
  label: string;
}

export const Column: FC<IColumnProps> = (props) => {
  const { label } = props;
  const data = useAppSelector((state) => state.reducer.data);
  const counter = data?.filter((card) => card.status === label).length;

  return (
    <ColumnContainer>
      <div className="label-container">
        <div className="label">{label}</div>
        <div className="counter">{counter}</div>
      </div>

      <DndProvider backend={HTML5Backend}>
        <DndContainer {...props} />
      </DndProvider>
    </ColumnContainer>
  );
};
