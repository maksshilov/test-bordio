import styled from "styled-components";
import { IAvatarProps } from ".";

interface IAvatarContainerProps extends IAvatarProps {}

export const AvatarContainer = styled.div<IAvatarContainerProps>`
  display: flex;
  margin-left: ${({ ml }) => ml}px;
  margin-right: ${({ mr }) => mr}px;
  & img {
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    border-radius: 100%;
  }
`;
