import React, { useState, useRef, useMemo, useCallback } from "react";
import { Animated, View, LayoutChangeEvent } from "react-native";

import {
  LabelNumber,
  TickerContainer,
  NumberTickerRow,
  MeasureContinerText
} from "./style";
import NumberTicker from "./number-ticker";

interface ITicker {
  value: number;
}

const numbersRange = Array(99)
  .fill(0)
  .map((_: number, index: number) => index);

const Ticker: React.FC<ITicker> = ({ value }) => {
  const [isMeasured, setIsMeasured] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);

  const handleLayout = useCallback(
    (event: LayoutChangeEvent): void => {
      if (!isMeasured) {
        const height = Math.floor(event.nativeEvent.layout.height);
        setIsMeasured(true);
        setHeight(height);
        console.log(height);
      }
    },
    [isMeasured]
  );

  const styles = {
    NumberTickerRowContainer: { height }
  };

  return (
    <TickerContainer>
      <NumberTickerRow style={styles.NumberTickerRowContainer}>
        <NumberTicker height={height} value={value} />
      </NumberTickerRow>
      <MeasureContinerText onLayout={handleLayout}>0</MeasureContinerText>
    </TickerContainer>
  );
};

export default Ticker;
