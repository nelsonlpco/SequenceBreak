import styled from "styled-components/native";
import { Container } from "components/Container";

export const ActionListContainer = styled(Container)`
  width: 100%;
`;

export const ListContainer = styled(Container)`
  margin-top: 23px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
`;
