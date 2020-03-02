import React, { useRef, useMemo, useCallback, useEffect } from "react";
import { Animated } from "react-native";
import {
  PanGestureHandler,
  State,
  PanGestureHandlerStateChangeEvent
} from "react-native-gesture-handler";

import { LabelNumber, NumberTickerRow } from "../style";

interface INumberTicker {
  height: number;
  value: number;
}

const numbersRange = Array(99)
  .fill(0)
  .map((_: number, index: number) => index);

const NumberTicker: React.FC<INumberTicker> = ({ height, value }) => {
  const animationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animationValue, {
      toValue: height * value * -1,
      duration: 500,
      delay: 500,
      useNativeDriver: true
    }).start();
  }, [value]);

  const onGestureEvent = Animated.event([
    {
      nativeEvent: {
        translationY: animationValue
      }
    }
  ]);

  const handlerStateChange = (
    event: PanGestureHandlerStateChangeEvent
  ): void => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      console.warn(event.nativeEvent.y);
    }
  };

  return (
    <NumberTickerRow style={{ height: height * 99 }}>
      <PanGestureHandler
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={handlerStateChange}
      >
        <Animated.View
          style={{
            backgroundColor: "red",
            transform: [
              {
                translateY: animationValue
              }
            ]
          }}
        >
          {numbersRange.map(n => (
            <LabelNumber key={n}>{n}</LabelNumber>
          ))}
        </Animated.View>
      </PanGestureHandler>
    </NumberTickerRow>
  );
};

export default NumberTicker;
