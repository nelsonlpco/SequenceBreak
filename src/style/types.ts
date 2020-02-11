import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      transparent: string;
      primary: string;
      secondary: string;
      terceary: string;
      action: string;
      stop: string;
      create: string;
    };
    layers: {
      l1: number;
      l2: number;
      l3: number;
      l4: number;
      l5: number;
      l6: number;
      l7: number;
    };
  }
}
