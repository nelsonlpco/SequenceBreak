import React from "react";

import { TimerContainer } from "./style";
import { useTheme } from "hooks/use-theme/useTheme";
import AnimatedLoaderCircle from "components/animated-loader-circle";

const Timer: React.FC = () => {
  const theme = useTheme();

  return (
    <TimerContainer>
      <AnimatedLoaderCircle
        bgColor={theme.colors.empty}
        loaderColor={theme.colors.start}
        height={188}
        width={188}
      />
    </TimerContainer>
  );
};

export default Timer;
