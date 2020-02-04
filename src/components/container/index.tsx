import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.secondary};
`;

export const TimerContainer = styled.View`
  flex: 2;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const ClockContainer = styled.View`
  position: absolute;
  width: 255px;
  height: 255px;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 360px;
  justify-content: center;
  align-items: center;
`;

export const MenuContainer = styled.View`
  flex: 1;
  overflow: scroll;
  position: relative;
  background-color: ${({theme}) => theme.colors.primary};
  border-top-left-radius: 33px;
  border-top-right-radius: 33px;
`;
