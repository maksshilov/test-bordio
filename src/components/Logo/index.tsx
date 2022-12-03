import Lottie from "lottie-react";
import React, { FC } from "react";
import { LogoContainer } from "./style";

interface ILogoProps {}

export const Logo: FC<ILogoProps> = () => {
  return (
    <LogoContainer>
      {/* <img src="/img/bordio-logo.png" alt="bordio-logo" /> */}
      <Lottie animationData={require("../../lottie/bordio-logo.json")} autoPlay style={{ width: "140px" }} />
    </LogoContainer>
  );
};
