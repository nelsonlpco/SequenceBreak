import { useContext } from "react";
import { ThemeContext } from "styled-components/native";

export const useTheme = () => {
  return useContext(ThemeContext);
};
