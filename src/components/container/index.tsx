import styled from 'styled-components/native';
import {theme} from 'style/theme';

export interface IContainer {
  flex?: number;
  justifyContent?: string;
  alignItems?: string;
  bgColor?: string;
}

export interface IAbsoluteContainer extends IContainer {
  layer?: number;
  top?: number | string;
  left?: number;
  alignSelf?: string;
}

export const Container = styled.View<IContainer>`
  position: relative;
  flex: ${({flex}) => (flex ? flex : 1)};
  background-color: ${({bgColor, theme}) =>
    bgColor ? bgColor : theme.colors.transparent};
  ${({justifyContent}) =>
    justifyContent ? `justify-content: ${justifyContent}` : undefined}
  ${({alignItems}) => (alignItems ? `align-items: ${alignItems}` : undefined)}
`;

export const AbsoluteContainer = styled(Container)<IAbsoluteContainer>`
  position: absolute;
  z-index: ${({layer, theme}) => (layer ? layer : theme.layers.l1)};
  top: ${({top}) => (top ? top : 0)};
  align-self: ${({alignSelf}) => alignSelf || 'auto'};
  ${({left}) => (left ? `left: ${left}` : undefined)};
`;
