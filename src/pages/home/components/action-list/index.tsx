import React, {useRef, useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Animated, Easing} from 'react-native';
import {SvgXml} from 'react-native-svg';

import {ActionContainer} from './style';
import {Button} from 'components/buttons';
import {AbsoluteContainer, Container} from 'components/container';
import {theme} from 'style/theme';
import {
  PlayAnimationManagerSelectors,
  PlayAnimationManagerActions,
} from 'store/play-animation-manager';
import {Icons} from 'components/icons';

const AbsoluteContainerAnimated = Animated.createAnimatedComponent(
  AbsoluteContainer,
);

const ActionList: React.FC = () => {
  const animationValue = useRef(new Animated.Value(0)).current;

  const dispatch = useDispatch();
  const isPlaying = useSelector(PlayAnimationManagerSelectors.isPlaying);
  const handlerStop = useCallback(() => {
    dispatch(PlayAnimationManagerActions.playManagerStart(false));
  }, [useDispatch]);

  useEffect(() => {
    if (isPlaying) {
      Animated.timing(animationValue, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animationValue, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }).start();
    }
  }, [isPlaying]);

  return (
    <Container>
      <ActionContainer style={{marginTop: 23}}></ActionContainer>
      <AbsoluteContainerAnimated
        style={{opacity: animationValue}}
        alignSelf="center"
        layer={theme.layers.l6}>
        <Button
          onPress={handlerStop}
          bgColor={theme.colors.stop}
          size={46}
          Icon={<SvgXml width={16} height={16} xml={Icons.stop} />}
        />
      </AbsoluteContainerAnimated>
      <AbsoluteContainerAnimated
        style={{
          opacity: animationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
          }),
          transform: [
            {
              translateY: animationValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 400],
              }),
            },
          ],
        }}
        alignSelf="center"
        layer={theme.layers.l7}>
        <Button
          onPress={() => console.warn('adicionar')}
          bgColor={theme.colors.create}
          size={46}
          Icon={<SvgXml width={16} height={16} xml={Icons.plus} />}
        />
      </AbsoluteContainerAnimated>
    </Container>
  );
};

export default ActionList;
