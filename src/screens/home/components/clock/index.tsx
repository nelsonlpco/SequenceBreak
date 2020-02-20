import React from "react";

import AnimatedLoaderCircle from "components/animated-loader-circle";
import { ClockContainer, ClockAbsoluteContainer } from "./styles";
import PlayButton from "../play-button";
import { useTheme } from "../../../../hooks/useTheme";

const Clock: React.FC = () => {
  const theme = useTheme();

  return (
    <ClockContainer>
      <ClockAbsoluteContainer>
        <AnimatedLoaderCircle
          bgColor={theme.colors.empty}
          loaderColor={theme.colors.start}
          height={188}
          width={188}
        />
      </ClockAbsoluteContainer>
      <ClockAbsoluteContainer>
        <AnimatedLoaderCircle
          bgColor={theme.colors.empty}
          loaderColor={theme.colors.stop}
          height={163}
          width={163}
        />
      </ClockAbsoluteContainer>
      <ClockAbsoluteContainer>
        <PlayButton isActive={true} />
      </ClockAbsoluteContainer>
    </ClockContainer>
  );
};

export default Clock;
