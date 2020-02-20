import React, { useRef, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Animated } from "react-native";
import { SvgXml } from "react-native-svg";

import { getStartPlayAnimation } from "store/app-manager/selectors";
import { Icons } from "components/icons";
import { AddButtonContainer } from "./style";

const AnimatedButton = Animated.createAnimatedComponent(AddButtonContainer);

const AddButton: React.FC = () => {
  const dispatch = useDispatch();
  const animationValue = useRef(new Animated.Value(0)).current;

  const startPlayAnimation = useSelector(getStartPlayAnimation);

  const onPressStopHandler = useCallback(() => {
    console.warn("Add item");
  }, [dispatch]);

  useEffect(() => {
    if (startPlayAnimation) {
      Animated.timing(animationValue, {
        toValue: 250,
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
      {
        translateY: animationValue
      }
    ],
    opacity: animationValue.interpolate({
      inputRange: [0, 250],
      outputRange: [1, 0]
    })
  };

  return (
    <AnimatedButton style={animationStyle} onPress={onPressStopHandler}>
      <SvgXml xml={Icons.plus} width={16} height={16} />
    </AnimatedButton>
  );
};

export default AddButton;
