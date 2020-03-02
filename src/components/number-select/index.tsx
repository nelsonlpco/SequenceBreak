import React from "react";
import { NumberSelectContainer, NumberLabel, NumberContainer } from "./style";
import { useTheme } from "../../hooks/useTheme";
import Ticker from "./ticker";

const NumberSelect: React.FC = () => {
  const theme = useTheme();

  return (
    <NumberSelectContainer>
      <Ticker value={10} />
    </NumberSelectContainer>
  );
};

export default NumberSelect;
