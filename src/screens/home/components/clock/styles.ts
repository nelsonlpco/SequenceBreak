import styled from "styled-components/native";
import { Container } from "components/Container";

export const ClockContainer = styled(Container)`
  justify-content: center;
  align-items: center;
  width: 188px;
  height: 188px;
  max-height: 188px;
`;

export const ClockAbsoluteContainer = styled(ClockContainer)`
  position: absolute;
  z-index: ${({ theme }) => theme.layers.l1};
  background-color: ${({ theme }) => theme.colors.transparent};
`;
