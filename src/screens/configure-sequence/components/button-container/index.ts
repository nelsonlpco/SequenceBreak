import styled from "styled-components/native";

export const MenuContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 109px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-right: 65px;
  padding-left: 65px;
`;
