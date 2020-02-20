import styled from "styled-components/native";

export const AddButtonContainer = styled.TouchableOpacity`
  position: absolute;
  align-self: center;
  z-index: ${({ theme }) => theme.layers.l7};
  background-color: ${({ theme }) => theme.colors.create};
  width: 46px;
  height: 46px;
  justify-content: center;
  align-items: center;
  border-radius: 360px;
`;
