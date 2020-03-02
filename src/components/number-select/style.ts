import styled from "styled-components/native";

export const NumberSelectContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  width: 146px;
  height: 118px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
`;

interface INumberLabel {
  color: string;
}
export const NumberLabel = styled.Text<INumberLabel>`
  font-size: 36px;
  font-weight: bold;
  color: ${({ color }) => color};
`;

export const NumberContainer = styled.View`
  position: relative;
  height: 44px;
  border-width: 1px;
  border-color: blue;
`;

export const NumberContainerAbsolute = styled.View`
  position: absolute;
  height: 44px;
  border-width: 1px;
  border-color: blue;
`;
