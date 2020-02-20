import React, { useRef, useEffect } from "react";
import Svg, { Circle } from "react-native-svg";
import { Animated } from "react-native";

interface ILoaderCircle {
  width: number;
  height: number;
  bgColor: string;
  loaderColor: string;
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const AnimatedLoaderCircle: React.FC<ILoaderCircle> = ({
  bgColor,
  height,
  loaderColor,
  width
}) => {
  const animationValue = useRef(new Animated.Value(10000)).current;

  const animation = () => {
    Animated.timing(animationValue, {
      toValue: 0,
      duration: 5000,
      useNativeDriver: true
    }).start(() => {
      animationValue.setValue(10000);
      animation();
    });
  };

  useEffect(() => {
    animation();
  }, []);

  return (
    <Svg width={width} height={height}>
      <Circle
        cx={width / 2}
        cy={height / 2}
        r={"46%"}
        fill="none"
        strokeWidth={10}
        stroke={bgColor}
      />
      <AnimatedCircle
        cx={width / 2}
        cy={height / 2}
        r={"46%"}
        fill="none"
        strokeWidth={10}
        stroke={loaderColor}
        strokeDasharray={10000}
        strokeDashoffset={animationValue}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default AnimatedLoaderCircle;
