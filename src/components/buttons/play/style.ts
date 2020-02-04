import styled from 'styled-components/native';

export interface IPlayContainer {
  size: number;
  bgColor: string;
}

export const PlayContainer = styled.TouchableOpacity<IPlayContainer>`
  position: absolute;
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
  background-color: ${({bgColor}) => bgColor};
  justify-content: center;
  align-items: center;
  border-radius: 360px;
  z-index: 9900;
`;
