import React, {useRef, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Animated, Easing, StyleSheet} from 'react-native';
import {theme} from '../../../style/theme';
import {SvgXml} from 'react-native-svg';
import {Icons} from 'components/icons';
import {PlayContainer} from './style';
import {Coord, Size} from 'store/play-animation-manager/model';

export interface IPlayButton {
  isActive: boolean;
  coord: Coord;
  size: Size;
  onStartHandler: () => void;
  onStopHandler: () => void;
  isPlaying: boolean;
}

const AnimatedButton = Animated.createAnimatedComponent(PlayContainer);

const PlayButton: React.FC<IPlayButton> = ({
  isActive,
  coord,
  size,
  onStartHandler,
  onStopHandler,
  isPlaying,
}) => {
  const animeValue = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    onStartHandler();
    Animated.timing(animeValue, {
      toValue: coord.y / 2,
      duration: 500,
      easing: Easing.ease,
    }).start();
  };

  const stopAnimation = () => {
    onStopHandler();
    Animated.timing(animeValue, {
      toValue: 0,
      duration: 500,
      easing: Easing.ease,
    }).start();
  };

  const onPressHandler = () => {
    if (isPlaying) {
      stopAnimation();
    } else {
      startAnimation();
    }
  };

  const styles = {
    moveDown: {
      overflow: 'visible',
      position: 'absolute',
      zIndex: 999999,
      transform: [
        {
          translateY: animeValue,
        },
      ],
      backgroundColor: animeValue.interpolate({
        inputRange: [0, coord.y / 2],
        outputRange: ['rgb(161,180,107)', 'rgb(246,100,109)'],
      }),
      width: animeValue.interpolate({
        inputRange: [0, coord.y / 2],
        outputRange: [81, size.width],
      }),
      height: animeValue.interpolate({
        inputRange: [0, coord.y / 2],
        outputRange: [81, size.height],
      }),
    },
  };

  return (
    <AnimatedButton
      style={styles.moveDown}
      onPress={onPressHandler}
      size={81}
      bgColor={isActive ? theme.colors.action : theme.colors.terceary}>
      <Animated.View
        style={{
          opacity: animeValue.interpolate({
            inputRange: [0, coord.y / 2],
            outputRange: [1, 0],
          }),
        }}>
        <SvgXml
          xml={isActive ? Icons.play : Icons.playOff}
          width={40}
          height={40}
        />
      </Animated.View>
      <Animated.View
        style={{
          position: 'absolute',
          zIndex: 1,
          opacity: animeValue.interpolate({
            inputRange: [0, coord.y / 2],
            outputRange: [0, 1],
          }),
        }}>
        <SvgXml xml={Icons.stop} width={14} height={19} />
      </Animated.View>
    </AnimatedButton>
  );
};

export default PlayButton;
