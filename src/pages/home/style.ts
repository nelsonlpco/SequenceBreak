import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const ButtonContainer = styled.View`
  position: absolute;
  top: -21px;
  align-self: center;
`;
