import styled from 'styled-components/native';

export interface IPlayContainer {
  size: number;
  bgColor: string;
}

export const PlayContainer = styled.TouchableOpacity<IPlayContainer>`
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
  background-color: ${({bgColor}) => bgColor};
  justify-content: center;
  align-items: center;
  border-radius: 360px;
  z-index: ${({theme}) => theme.layers.l7};
`;
