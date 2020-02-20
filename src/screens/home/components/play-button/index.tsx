import React, { useEffect, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Animated } from "react-native";
import { SvgXml } from "react-native-svg";

import { PlayButtonContainer } from "./style";
import { useTheme } from "../../../../hooks/useTheme";
import { Icons } from "components/icons";

import { getStartPlayAnimation } from "store/app-manager/selectors";
import { AppManagerStartPlayAnimation } from "store/app-manager/actions";

interface IPlayButton {
  isActive: boolean;
}

const AnimatedButton = Animated.createAnimatedComponent(PlayButtonContainer);

const PlayButton: React.FC<IPlayButton> = ({ isActive }) => {
  const animationValue = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();
  const theme = useTheme();

  const startPlayAnimation = useSelector(getStartPlayAnimation);

  const onPlayButtonClick = useCallback(() => {
    dispatch(AppManagerStartPlayAnimation());
  }, [dispatch]);

  useEffect(() => {
    if (startPlayAnimation) {
      Animated.timing(animationValue, {
        toValue: 200,
        duration: 400,
        useNativeDriver: true
      }).start();
    } else {
      Animated.timing(animationValue, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true
      }).start();
    }
  }, [startPlayAnimation]);

  const animationStyle = {
    transform: [
      { translateY: animationValue },
      {
        scale: animationValue.interpolate({
          inputRange: [0, 200],
          outputRange: [1, 0.4]
        })
      }
    ],
    opacity: animationValue.interpolate({
      inputRange: [0, 200],
      outputRange: [1, 0]
    })
  };

  return (
    <AnimatedButton
      onPress={onPlayButtonClick}
      bgColor={isActive ? theme.colors.start : theme.colors.empty}
      size={81}
      style={animationStyle}
    >
      <SvgXml
        xml={isActive ? Icons.play : Icons.playOff}
        width={40}
        height={40}
      ></SvgXml>
    </AnimatedButton>
  );
};

export default PlayButton;
