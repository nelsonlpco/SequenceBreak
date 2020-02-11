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
}) => {
  const dispatch = useDispatch();
  let view = useRef<null | TouchableOpacity>(null);

  // const measured = useSelector(
  //   (state: AppState) => state.PlayManagerReducer.stopSize,
  // );

  // const onLa = (e: LayoutChangeEvent) => {
  //   if (view.current != null && measured.height === 0) {
  //     view.current.measure(
  //       (
  //         ox: number,
  //         oy: number,
  //         width: number,
  //         height: number,
  //         px: number,
  //         py: number,
  //       ) => {
  //         console.log(ox, oy, width, height, px, py);
  //         dispatch(setStopLayout({x: px, y: py}, {width, height}));
  //       },
  //     );
  //   }
  // };

  return (
    <ButtonContainer
      ref={view}
      bgColor={bgColor}
      onPress={onPress}
      size={size}
      onLayout={onLayout}>
      {Icon}
    </ButtonContainer>
  );
};

export default Button;
