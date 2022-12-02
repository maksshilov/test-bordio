import React, { FC } from "react";
import { LogoContainer } from "./style";

interface ILogoProps {}

export const Logo: FC<ILogoProps> = () => {
  return (
    <LogoContainer>
      <img src="/img/bordio-logo.png" alt="bordio-logo" />
    </LogoContainer>
  );
};
