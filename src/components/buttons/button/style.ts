import styled from 'styled-components/native';

export interface IButtonContainer {
  bgColor: string;
  size?: number;
}

export const ButtonContainer = styled.TouchableOpacity<IButtonContainer>`
  width: ${({size}) => `${size ? size : 43}px`};
  height: ${({size}) => `${size ? size : 43}px`};
  justify-content: center;
  align-items: center;
  background-color: ${({bgColor}) => bgColor};
  border-radius: 360px;
`;
