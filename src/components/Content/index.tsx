/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ActionTypes } from "../../redux/types";
import { ICard, STATUSES } from "../../types";
import { Column } from "../Column";
import { Header } from "../Header";
import { ContentContainer } from "./style";

const URL = "/cards.json";

const getCards = async () => {
  return await fetch(URL);
};

interface IContentProps {}

export const Content: FC<IContentProps> = () => {
  const data = useAppSelector((state) => state.reducer.data);

  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleGetCards = async () => {
    const getCardsResponse = await getCards();
    const getCardsResponseJson: ICard[] = await getCardsResponse.json();
    if (getCardsResponse) {
      setTimeout(() => {
        dispatch({ type: ActionTypes.SET_DATA, data: getCardsResponseJson });
        setIsLoading(() => false);
      }, 100);
    } else {
      setIsLoading(() => false);
    }
  };

  useEffect(() => {
    handleGetCards();
  }, []);

  const content = isLoading ? <div>Loading...</div> : data ? STATUSES.map((status) => <Column label={status} key={status} />) : <div>Error</div>;

  const { width } = useWindowDimensions();

  const SIDEBAR_WIDTH = 219;
  const TOOLS_WIDTH = 154;
  const contentWidth = width - SIDEBAR_WIDTH - TOOLS_WIDTH;

  return (
    <ContentContainer width={contentWidth}>
      <Header />
      <div className="content-container">{content}</div>
    </ContentContainer>
  );
};
