/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from "react";
import { useDrop } from "react-dnd";
import { IColumnProps } from "..";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { ActionTypes } from "../../../redux/types";
import { DragItemTypes, ICard } from "../../../types";
import { Card } from "./Card";

interface IDndContainerProps extends IColumnProps {}

export const DndContainer: FC<IDndContainerProps> = ({ label }) => {
  const data = useAppSelector((state) => state.reducer.data);

  const dispatch = useAppDispatch();

  const filteredData = data && data.filter((card) => card.status === label);

  const dropCardToStart = (item: ICard) => {
    console.log("dropCardToStart");
    if (data) {
      let updatedData: ICard[] = [];
      if (item.status === label) {
        updatedData = [item, ...data.filter((card) => card.uuid !== item.uuid)];
      } else {
        const updatedItem: ICard = { ...item, status: label };
        updatedData = [updatedItem, ...data.filter((card) => card.uuid !== item.uuid)];
      }
      dispatch({ type: ActionTypes.SET_DATA, data: updatedData });
    }
  };

  const [{ isOver: isOverStart }, dropToStart] = useDrop(
    () => ({
      accept: DragItemTypes.CARD,
      drop: (item: ICard) => dropCardToStart(item),
      collect: (monitor) => ({ isOver: !!monitor.isOver() }),
    }),
    [data]
  );

  const dropCardToEnd = (item: ICard) => {
    console.log("dropCardToEnd");
    if (data) {
      let updatedData: ICard[] = [];

      if (item.status === label) {
        updatedData = [...data.filter((card) => card.uuid !== item.uuid), item];
      } else {
        const updatedItem: ICard = { ...item, status: label };
        updatedData = filteredData!.length
          ? [...data.filter((card) => card.uuid !== item.uuid), updatedItem]
          : [updatedItem, ...data.filter((card) => card.uuid !== item.uuid)];
      }
      dispatch({ type: ActionTypes.SET_DATA, data: updatedData });
    }
  };

  const [{ isOver: isOverEnd }, dropToEnd] = useDrop(
    () => ({
      accept: DragItemTypes.CARD,
      drop: (item: ICard) => dropCardToEnd(item),
      collect: (monitor) => ({ isOver: !!monitor.isOver() }),
    }),
    [data]
  );

  return (
    <div className={`cards-container`}>
      <div className="drop-start" ref={dropToStart} />
      {filteredData && filteredData.map((card) => <Card {...card} key={card.uuid} />)}
      <div className="drop-end" ref={dropToEnd} />
    </div>
  );
};
