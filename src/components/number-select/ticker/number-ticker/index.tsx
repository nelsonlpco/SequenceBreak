import React, { useRef, useMemo, useCallback } from "react";
import { Animated } from "react-native";
import { LabelNumber } from "../style";

interface INumberTicker {
  height: number;
  value: number;
}

const numbersRange = Array(99)
  .fill(0)
  .map((_: number, index: number) => index);

const NumberTicker: React.FC<INumberTicker> = ({ height, value }) => {
  const animationValue = useRef(new Animated.Value(0)).current;

  const renderNumbers = useMemo(() => {
    numbersRange.map(number => (
      <LabelNumber key={number}>{number}</LabelNumber>
    ));
  }, [numbersRange]);

  return <Animated.View>{renderNumbers}</Animated.View>;
};

export default NumberTicker;
