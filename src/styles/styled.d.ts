import styled from "styled-components";
import { darkTheme } from "./themes/dark";

type Theme = typeof darkTheme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
