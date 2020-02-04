import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      terceary: string;
      action: string;
      stop: string;
      create: string;
    };
  }
}
