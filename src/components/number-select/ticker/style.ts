import styled from "styled-components/native";

export const TickerContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.transparent};
  align-items: center;
  justify-content: center;
`;

export const NumberTickerRow = styled.View`
  overflow: hidden;
  flex-direction: row;
  border-width: 1px;
  border-color: yellow;
`;

export const LabelNumber = styled.Text`
  font-size: 44px;
  color: ${({ theme }) => theme.colors.start};
  text-align: center;
`;

export const MeasureContinerText = styled(LabelNumber)`
  position: absolute;
  z-index: ${({ theme }) => theme.layers.l1};
  opacity: 0;
`;
