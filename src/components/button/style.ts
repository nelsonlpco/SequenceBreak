import styled from "styled-components/native";

interface IButtonContainer {
  bgColor: string;
}

export const ButtonContainer = styled.TouchableOpacity<IButtonContainer>`
  background-color: ${({ bgColor }) => bgColor};
  min-width: 110px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;
export const ButtonLabel = styled.Text`
  color: ${({ theme }) => theme.colors.empty};
`;
