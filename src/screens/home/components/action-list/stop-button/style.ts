import styled from "styled-components/native";

export const StopButtonContainer = styled.TouchableOpacity`
  position: absolute;
  align-self: center;
  z-index: ${({ theme }) => theme.layers.l6};
  background-color: ${({ theme }) => theme.colors.stop};
  width: 46px;
  height: 46px;
  justify-content: center;
  align-items: center;
  border-radius: 360px;
`;
