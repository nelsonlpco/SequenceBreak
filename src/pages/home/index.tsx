import React, {useRef, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  Container,
  MenuContainer,
  TimerContainer,
  ClockContainer,
} from 'components/container';
import {theme} from '../../style/theme';
import {ButtonContainer} from './style';
import {SvgXml} from 'react-native-svg';
import {Icons} from 'components/icons';
import CircleTimer from 'components/CircleTimer';
import {Button, PlayButton} from 'components/buttons';
import {LayoutChangeEvent, Animated, Easing, View} from 'react-native';
import {Text} from 'react-native';

import {AppState} from '../../store';

const AnimatedButton = Animated.createAnimatedComponent(ButtonContainer);

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const animationValue = useRef(new Animated.Value(0)).current;

  const isPlaying = useSelector(
    (state: AppState) => state.PlayManagerReducer.isPlaying,
  );

  const playAnimation = () => {
    Animated.timing(animationValue, {
      toValue: 400,
      duration: 500,
      easing: Easing.ease,
    }).start();
  };

  const stopAnimation = () => {
    Animated.timing(animationValue, {
      toValue: 0,
      duration: 500,
      easing: Easing.ease,
    }).start();
  };

  useEffect(() => {
    if (isPlaying) {
      playAnimation();
    } else {
      stopAnimation();
    }
  }, [isPlaying]);
  const onLayoutHandler = (event: LayoutChangeEvent) => {};

  const coord = useSelector(
    (state: AppState) => state.PlayManagerReducer.stopCoords,
  );

  return (
    <Container>
      <TimerContainer>
        <View
          style={{
            height: '110%',
            backgroundColor: 'none',
            position: 'absolute',
            zIndex: 10000,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ClockContainer></ClockContainer>
          <CircleTimer
            width={188}
            height={188}
            bgColor={theme.colors.terceary}
            bgColorAction={theme.colors.action}
          />
          <Container
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              backgroundColor: 'none',
            }}>
            <PlayButton isActive={true} />
            <CircleTimer
              width={163}
              height={163}
              bgColor={theme.colors.terceary}
              bgColorAction={theme.colors.stop}
            />
          </Container>
        </View>
      </TimerContainer>
      <MenuContainer>
        <AnimatedButton
          style={{
            transform: [
              {
                translateY: animationValue,
              },
            ],
          }}>
          <Button
            onLayout={onLayoutHandler}
            bgColor={theme.colors.create}
            onPress={() => false}
            Icon={<SvgXml xml={Icons.plus} width={18} height={18} />}
          />
        </AnimatedButton>
      </MenuContainer>
    </Container>
  );
};

export default HomePage;
