import React, { useRef, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Animated } from "react-native";
import { SvgXml } from "react-native-svg";

import { getStartPlayAnimation } from "store/app-manager/selectors";
import { AppManagerStopPlayAnimation } from "store/app-manager/actions";
import { Icons } from "components/icons";
import { StopButtonContainer } from "./style";

const AnimatedButton = Animated.createAnimatedComponent(StopButtonContainer);

const StopButton: React.FC = () => {
  const dispatch = useDispatch();
  const animationValue = useRef(new Animated.Value(0)).current;

  const startPlayAnimation = useSelector(getStartPlayAnimation);

  const onPressStopHandler = useCallback(() => {
    dispatch(AppManagerStopPlayAnimation());
  }, [dispatch]);

  useEffect(() => {
    if (startPlayAnimation) {
      Animated.timing(animationValue, {
        toValue: 1,
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
    opacity: animationValue
  };

  return (
    <AnimatedButton style={animationStyle} onPress={onPressStopHandler}>
      <SvgXml xml={Icons.stop} width={16} height={16} />
    </AnimatedButton>
  );
};

export default StopButton;
