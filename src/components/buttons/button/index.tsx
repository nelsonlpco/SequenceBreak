import React, {useRef, useEffect, ReactElement} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ButtonContainer} from './style';
import {LayoutChangeEvent, TouchableOpacity} from 'react-native';

export interface IButton {
  bgColor: string;
  onPress: () => void;
  Icon?: Element | String;
  size?: number;
  onLayout?: (event: LayoutChangeEvent) => void;
}

const Button: React.FC<IButton> = ({
  bgColor,
  onPress,
  Icon,
  size,
  onLayout,
  ...args
}) => {
  return (
    <ButtonContainer
      {...args}
      bgColor={bgColor}
      onPress={onPress}
      size={size}
      onLayout={onLayout}>
      {Icon}
    </ButtonContainer>
  );
};

export default Button;
