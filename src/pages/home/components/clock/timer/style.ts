import styled from 'styled-components/native';
import {Font96Bold} from 'components/fonts';

export const Number = styled(Font96Bold)`
  color: ${({theme}) => theme.colors.action};
`;
