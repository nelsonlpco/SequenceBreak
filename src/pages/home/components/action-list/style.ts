import styled from 'styled-components';
import {Container} from 'components/container';

export const ActionContainer = styled(Container)`
  background-color: ${({theme}) => theme.colors.primary};
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
`;
