/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useRef, useState } from "react";
import { DragItemTypes, ICard } from "../../../../types";
import { CardContainer } from "./style";
import { useDrag, useDrop } from "react-dnd";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { ActionTypes } from "../../../../redux/types";

const reorder = (array: any[], from: number, to: number) => {
  array.splice(to, 0, array.splice(from, 1)[0]);
};

interface ICardProps extends ICard {}

export const Card: FC<ICardProps> = (props) => {
  const { color, description, duration, status, uuid } = props;
  const data = useAppSelector((state) => state.reducer.data);
  const dispatch = useAppDispatch();

  const [{ isDragging }, drag] = useDrag(
    () => ({
      item: { ...props },
      type: DragItemTypes.CARD,
      collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
    }),
    []
  );

  const isThisHoverRef = useRef<boolean>(true);

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: DragItemTypes.CARD,
      drop: (item: ICard) => {
        const isSameStatus = item.status === status;

        const updatedItem: ICard = isSameStatus ? item : { ...item, status };

        const indexOfDrag = data!.findIndex((card) => card.uuid === updatedItem.uuid);
        const indexOfDrop = data!.findIndex((card) => card.uuid === uuid);

        const updatedData = data!.map((card) => (card.uuid === updatedItem.uuid ? updatedItem : card));
        reorder(updatedData, indexOfDrag, indexOfDrop);

        dispatch({ type: ActionTypes.SET_DATA, data: updatedData });
      },
      collect: (monitor) => ({ isOver: !!monitor.isOver() }),
      hover: (item: ICard) => {
        const _isThisHover = item.uuid === uuid;
        isThisHoverRef.current = _isThisHover;
      },
    }),
    [data, status]
  );

  const styleIsOver = !isThisHoverRef ? (isOver ? "in" : "out") : "";

  const cardContainerProps = { status, color };
  return (
    <>
      <CardContainer {...cardContainerProps} ref={drag} isDragging={isDragging} status={status}>
        <div ref={drop} className="drop">
          <div className="description">{description}</div>
          <div className="duration">{duration}</div>
        </div>
      </CardContainer>
      <div className={`drop-preview ${styleIsOver}`} />
    </>
  );
};
