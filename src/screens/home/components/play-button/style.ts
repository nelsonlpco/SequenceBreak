import styled from "styled-components/native";

interface IPlayButtonContainer {
  size: number;
  bgColor: string;
}

export const PlayButtonContainer = styled.TouchableOpacity<
  IPlayButtonContainer
>`
  background-color: ${({ bgColor }) => bgColor};
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  justify-content: center;
  align-items: center;
  border-radius: 360px;
  z-index: ${({ theme }) => theme.layers.l5};
`;
