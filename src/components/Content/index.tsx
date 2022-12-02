import React, { FC } from "react";
import { Header } from "../Header";
import { ContentContainer } from "./style";

interface IContentProps {}

export const Content: FC<IContentProps> = () => {
  return (
    <ContentContainer>
      <Header />
    </ContentContainer>
  );
};
