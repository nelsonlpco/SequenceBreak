import React from 'react';

import {Container, AbsoluteContainer} from 'components/container';
import CircleTimer from 'components/CircleTimer';
import {theme} from 'style/theme';
import PlayButton from '../play';
import Timer from './timer';

const Clock: React.FC = () => {
  return (
    <Container
      justifyContent="center"
      alignItems="center"
      style={{width: 188, maxHeight: 188}}>
      <AbsoluteContainer>
        <CircleTimer
          width={188}
          height={188}
          bgColor={theme.colors.terceary}
          bgColorAction={theme.colors.action}></CircleTimer>
      </AbsoluteContainer>
      <AbsoluteContainer
        style={{width: '100%', height: '100%'}}
        justifyContent="center"
        alignItems="center">
        <CircleTimer
          width={163}
          height={163}
          bgColor={theme.colors.terceary}
          bgColorAction={theme.colors.stop}
        />
      </AbsoluteContainer>
      <AbsoluteContainer
        style={{width: '100%', height: '100%'}}
        justifyContent="center"
        alignItems="center">
        <Timer />
        <PlayButton isActive={true} />
      </AbsoluteContainer>
    </Container>
  );
};

export default Clock;
