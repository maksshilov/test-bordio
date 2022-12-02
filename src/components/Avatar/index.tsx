import React, { FC } from "react";
import { AvatarContainer } from "./style";

export interface IAvatarProps {
  size?: number;
  ml?: number;
  mr?: number;
}

export const Avatar: FC<IAvatarProps> = ({ size = 22, ml = 0, mr = 8 }) => {
  const avatarContainerProps = { size, ml, mr };
  return (
    <AvatarContainer {...avatarContainerProps}>
      <img src="/img/ava.png" alt="avatar" />
    </AvatarContainer>
  );
};
