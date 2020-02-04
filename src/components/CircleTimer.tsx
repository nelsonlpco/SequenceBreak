import React from 'react';
import {} from 'react-native';
import {Svg, Circle} from 'react-native-svg';

export interface ICircleTimer {
  width: number;
  height: number;
  bgColor: string;
  bgColorAction: string;
}

const CircleTimer: React.FC<ICircleTimer> = ({
  width,
  height,
  bgColor,
  bgColorAction,
}) => {
  return (
    <Svg width={width} height={height}>
      <Circle
        cx={width / 2}
        cy={height / 2}
        r={'46%'}
        fill="none"
        strokeWidth={10}
        stroke={bgColor}
      />
      <Circle
        cx={width / 2}
        fill="none"
        cy={width / 2}
        r={'46%'}
        strokeWidth={10}
        stroke={bgColorAction}
        strokeDasharray="300"
        strokeDashoffset={280}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default CircleTimer;
