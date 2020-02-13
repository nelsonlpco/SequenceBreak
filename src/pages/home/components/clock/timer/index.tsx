import React, {useRef, useEffect, useState} from 'react';
import {Animated} from 'react-native';
import {useSelector} from 'react-redux';

import {Number} from './style';
import {PlayAnimationManagerSelectors} from 'store/play-animation-manager';

const AnimatedNumber = Animated.createAnimatedComponent(Number);

const Timer: React.FC = () => {
  const opacityValue = useRef(new Animated.Value(0)).current;
  const [number, setNumber] = useState(0);
  const total: number = 5;

  const isPlaying = useSelector(PlayAnimationManagerSelectors.isPlaying);

  useEffect(() => {
    if (!isPlaying) {
      setNumber(0);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (isPlaying) {
      Animated.sequence([
        Animated.timing(opacityValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacityValue, {
          toValue: 0,
          delay: 400,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [number]);

  useEffect(() => {
    let interval: any = null;
    if (isPlaying && number < total) {
      interval = setTimeout(() => {
        setNumber(number + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [number, isPlaying]);

  return (
    <AnimatedNumber style={{opacity: opacityValue}}>{number}</AnimatedNumber>
  );
};

export default Timer;
