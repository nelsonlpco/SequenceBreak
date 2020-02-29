import React from "react";
import { ButtonContainer, ButtonLabel } from "./style";

interface IButton {
  bgColor: string;
  title: string;
}

const Button: React.FC<IButton> = ({ bgColor, title }) => {
  return (
    <ButtonContainer bgColor={bgColor}>
      <ButtonLabel>{title}</ButtonLabel>
    </ButtonContainer>
  );
};

export default Button;
