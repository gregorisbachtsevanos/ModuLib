// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      white: string;
      black: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
      lightYellow: string;
      yellow: string;
      darkYellow: string;
      violet: string;
      lightViolet: string;
      darkViolet: string;
      extraLightViolet: string;
      navy: string;
      success: string;
      fadedSuccess: string;
      error: string;
      fadedError: string;
      warning: string;
      fadedWarning: string;
    };
    sizes: {
      smallMobile: string;
      mobile: string;
      tablet: string;
      laptop: string;
      desktop: string;
    };
    maxWidth: string;
    pagePadding: string;
  }
}
