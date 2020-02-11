import React, {useRef, useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Animated, Easing} from 'react-native';
import {theme} from 'style/theme';
import {SvgXml} from 'react-native-svg';
import {Icons} from 'components/icons';
import {PlayContainer} from './style';
import {
  PlayAnimationManagerSelectors,
  PlayAnimationManagerActions,
} from 'store/play-animation-manager';

export interface IPlayButton {
  isActive: boolean;
}

const AnimatedButton = Animated.createAnimatedComponent(PlayContainer);

const PlayButton: React.FC<IPlayButton> = ({isActive}) => {
  const animeValue = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();

  const isPlaying = useSelector(PlayAnimationManagerSelectors.isPlaying);
  const coord = useSelector(PlayAnimationManagerSelectors.getCoord);
  const size = useSelector(PlayAnimationManagerSelectors.getSize);

  const setIsPlaying = useCallback(
    (start: boolean) => {
      PlayAnimationManagerActions.playManagerStart(start);
    },
    [dispatch],
  );

  const startAnimation = () => {
    Animated.timing(animeValue, {
      toValue: 200,
      duration: 500,
      easing: Easing.ease,
    }).start();
  };

  const stopAnimation = () => {
    Animated.timing(animeValue, {
      toValue: 0,
      duration: 500,
      easing: Easing.ease,
    }).start();
  };

  useEffect(() => {
    if (isPlaying) {
      startAnimation();
    } else {
      stopAnimation();
    }
  }, [isPlaying]);

  const playPressHandler = useCallback(() => {
    dispatch(PlayAnimationManagerActions.playManagerStart(!isPlaying));
  }, [dispatch]);

  const styles = {
    moveDown: {
      overflow: 'visible',
      position: 'absolute',
      zIndex: theme.layers.l5,
      transform: [
        {
          translateY: animeValue,
        },
      ],
      opacity: animeValue.interpolate({
        inputRange: [0, 200],
        outputRange: [1, 0],
      }),
      backgroundColor: animeValue.interpolate({
        inputRange: [0, 200],
        outputRange: [
          isActive ? theme.colors.action : theme.colors.terceary,
          theme.colors.create,
        ],
      }),
      width: animeValue.interpolate({
        inputRange: [0, 200],
        outputRange: [81, 60],
      }),
      height: animeValue.interpolate({
        inputRange: [0, 200],
        outputRange: [81, 60],
      }),
    },
  };

  return (
    <AnimatedButton
      style={styles.moveDown}
      onPress={playPressHandler}
      size={81}
      bgColor={isActive ? theme.colors.action : theme.colors.terceary}>
      <SvgXml
        xml={isActive ? Icons.play : Icons.playOff}
        width={40}
        height={40}
      />
    </AnimatedButton>
  );
};

export default PlayButton;
